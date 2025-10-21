import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Package, ShoppingCart, DollarSign, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface Stats {
  products: number;
  orders: number;
  revenue: number;
  users: number;
  lowStock: number;
  pendingOrders: number;
}

interface SalesData {
  date: string;
  revenue: number;
  orders: number;
}

interface TopProduct {
  name: string;
  sales: number;
}

export const DashboardStats = () => {
  const [stats, setStats] = useState<Stats>({
    products: 0,
    orders: 0,
    revenue: 0,
    users: 0,
    lowStock: 0,
    pendingOrders: 0,
  });
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [productsRes, ordersRes, usersRes] = await Promise.all([
        supabase.from("products").select("*, order_items(quantity)"),
        supabase.from("orders").select("*"),
        supabase.from("profiles").select("*", { count: "exact", head: true }),
      ]);

      const revenue = ordersRes.data?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0;
      const lowStockCount = productsRes.data?.filter(p => p.stock < 10).length || 0;
      const pendingCount = ordersRes.data?.filter(o => o.status === "pending").length || 0;

      setStats({
        products: productsRes.data?.length || 0,
        orders: ordersRes.data?.length || 0,
        revenue,
        users: usersRes.count || 0,
        lowStock: lowStockCount,
        pendingOrders: pendingCount,
      });

      // Calculate sales per day (last 7 days)
      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return date.toISOString().split('T')[0];
      });

      const salesByDay = last7Days.map(date => {
        const dayOrders = ordersRes.data?.filter(o => 
          o.created_at.split('T')[0] === date
        ) || [];
        return {
          date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          revenue: dayOrders.reduce((sum, o) => sum + Number(o.total_amount), 0),
          orders: dayOrders.length,
        };
      });
      setSalesData(salesByDay);

      // Calculate top products
      const productSales = productsRes.data?.map(product => ({
        name: product.name,
        sales: product.order_items?.reduce((sum: number, item: any) => sum + item.quantity, 0) || 0,
      })) || [];
      
      setTopProducts(
        productSales
          .sort((a, b) => b.sales - a.sales)
          .slice(0, 5)
      );
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--brand-orange))', 'hsl(var(--brand-red))', 'hsl(var(--muted))', 'hsl(var(--accent))'];

  if (loading) {
    return <div className="text-center py-8">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Alert Cards */}
      {(stats.lowStock > 0 || stats.pendingOrders > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.lowStock > 0 && (
            <Card className="p-4 border-destructive bg-destructive/5">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <div>
                  <p className="font-semibold text-destructive">Low Stock Alert</p>
                  <p className="text-sm text-muted-foreground">{stats.lowStock} products below 10 units</p>
                </div>
              </div>
            </Card>
          )}
          {stats.pendingOrders > 0 && (
            <Card className="p-4 border-primary bg-primary/5">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-primary">Pending Orders</p>
                  <p className="text-sm text-muted-foreground">{stats.pendingOrders} orders need processing</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Package className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Products</p>
              <p className="text-2xl font-bold">{stats.products}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Orders</p>
              <p className="text-2xl font-bold">{stats.orders}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Revenue</p>
              <p className="text-2xl font-bold">${stats.revenue.toFixed(2)}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Users</p>
              <p className="text-2xl font-bold">{stats.users}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Sales Overview (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Products */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top 5 Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProducts}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="sales" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Order Status Distribution */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
            <span className="text-sm">Total Orders This Week</span>
            <span className="font-semibold">{salesData.reduce((sum, day) => sum + day.orders, 0)}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
            <span className="text-sm">Average Order Value</span>
            <span className="font-semibold">
              ${stats.orders > 0 ? (stats.revenue / stats.orders).toFixed(2) : '0.00'}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
