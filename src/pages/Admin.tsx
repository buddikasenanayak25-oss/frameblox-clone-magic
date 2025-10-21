import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductsManagement } from "@/components/admin/ProductsManagement";
import { OrdersManagement } from "@/components/admin/OrdersManagement";
import { CategoriesManagement } from "@/components/admin/CategoriesManagement";
import { UsersManagement } from "@/components/admin/UsersManagement";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { InventoryAlerts } from "@/components/admin/InventoryAlerts";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (!roles) {
        navigate("/");
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-custom py-8">
        <h1 className="text-4xl font-black tracking-tighter mb-8">Admin Dashboard</h1>

        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <DashboardStats />
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <ProductsManagement />
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <OrdersManagement />
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <InventoryAlerts />
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <CategoriesManagement />
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <UsersManagement />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;