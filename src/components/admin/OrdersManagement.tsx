import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Eye } from "lucide-react";
import { OrderDetailsDialog } from "./OrderDetailsDialog";

interface Order {
  id: string;
  user_id: string;
  total_amount: number;
  status: string;
  payment_status: string;
  created_at: string;
  user_name?: string;
}

export const OrdersManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const { data: ordersData, error: ordersError } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (ordersError) {
      toast({ title: "Error loading orders", variant: "destructive" });
      return;
    }

    const { data: profiles } = await supabase
      .from("profiles")
      .select("user_id, first_name, last_name");

    const ordersWithNames = ordersData?.map((order) => {
      const profile = profiles?.find((p) => p.user_id === order.user_id);
      return {
        ...order,
        user_name: profile
          ? `${profile.first_name} ${profile.last_name}`
          : "N/A",
      };
    });

    setOrders(ordersWithNames || []);
    setLoading(false);
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    const { error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", orderId);

    if (error) {
      toast({ title: "Error updating order", variant: "destructive" });
      return;
    }

    toast({ title: "Order updated successfully" });
    loadOrders();
  };

  if (loading) return <div>Loading orders...</div>;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Orders Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-mono text-xs">{order.id.slice(0, 8)}</TableCell>
              <TableCell>{order.user_name}</TableCell>
              <TableCell>${order.total_amount}</TableCell>
              <TableCell>
                <Select
                  value={order.status}
                  onValueChange={(value) => updateOrderStatus(order.id, value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <span className={order.payment_status === "completed" ? "text-green-600" : ""}>
                  {order.payment_status}
                </span>
              </TableCell>
              <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSelectedOrderId(order.id);
                    setDialogOpen(true);
                  }}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {orders.length === 0 && (
        <p className="text-center text-muted-foreground py-8">No orders found</p>
      )}

      <OrderDetailsDialog
        orderId={selectedOrderId}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onUpdate={loadOrders}
      />
    </Card>
  );
};
