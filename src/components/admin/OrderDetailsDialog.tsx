import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Printer, Package, MapPin } from "lucide-react";

interface OrderItem {
  id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
  products?: {
    name: string;
    sku: string;
  };
}

interface Order {
  id: string;
  user_id: string;
  total_amount: number;
  status: string;
  payment_status: string;
  created_at: string;
  tracking_number?: string;
  shipping_address: any;
  billing_address: any;
  notes?: string;
}

interface OrderDetailsDialogProps {
  orderId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

export const OrderDetailsDialog = ({ orderId, open, onOpenChange, onUpdate }: OrderDetailsDialogProps) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (orderId && open) {
      loadOrderDetails();
    }
  }, [orderId, open]);

  const loadOrderDetails = async () => {
    if (!orderId) return;

    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();

    if (orderError) {
      toast({ title: "Error loading order", variant: "destructive" });
      return;
    }

    const { data: itemsData } = await supabase
      .from("order_items")
      .select("*, products(name, sku)")
      .eq("order_id", orderId);

    setOrder(orderData);
    setOrderItems(itemsData || []);
    setTrackingNumber(orderData.tracking_number || "");
  };

  const updateTrackingNumber = async () => {
    if (!orderId) return;
    setLoading(true);

    const { error } = await supabase
      .from("orders")
      .update({ tracking_number: trackingNumber })
      .eq("id", orderId);

    if (error) {
      toast({ title: "Error updating tracking number", variant: "destructive" });
    } else {
      toast({ title: "Tracking number updated successfully" });
      onUpdate();
    }
    setLoading(false);
  };

  const printInvoice = () => {
    window.print();
  };

  if (!order) return null;

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      pending: "bg-yellow-500",
      processing: "bg-blue-500",
      shipped: "bg-purple-500",
      delivered: "bg-green-500",
      cancelled: "bg-red-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Order Details</span>
            <Button variant="outline" size="sm" onClick={printInvoice}>
              <Printer className="h-4 w-4 mr-2" />
              Print Invoice
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-muted-foreground">Order ID</Label>
              <p className="font-mono text-sm">{order.id.slice(0, 8)}</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Date</Label>
              <p>{new Date(order.created_at).toLocaleDateString()}</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Status</Label>
              <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
            </div>
            <div>
              <Label className="text-muted-foreground">Payment Status</Label>
              <Badge variant={order.payment_status === "completed" ? "default" : "secondary"}>
                {order.payment_status}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Tracking Number */}
          <div className="space-y-2">
            <Label>Tracking Number</Label>
            <div className="flex gap-2">
              <Input
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
              />
              <Button onClick={updateTrackingNumber} disabled={loading}>
                <Package className="h-4 w-4 mr-2" />
                Update
              </Button>
            </div>
          </div>

          <Separator />

          {/* Order Items */}
          <div>
            <h3 className="font-semibold mb-3">Order Items</h3>
            <div className="space-y-2">
              {orderItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{item.products?.name || "Unknown Product"}</p>
                    <p className="text-sm text-muted-foreground">SKU: {item.products?.sku || "N/A"}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {item.quantity} x ${Number(item.price_at_time).toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ${(item.quantity * Number(item.price_at_time)).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span>${Number(order.total_amount).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Shipping Address
              </h3>
              <div className="p-3 bg-muted/50 rounded-lg text-sm">
                {order.shipping_address ? (
                  <>
                    <p>{order.shipping_address.name}</p>
                    <p>{order.shipping_address.address}</p>
                    <p>
                      {order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zip}
                    </p>
                    <p>{order.shipping_address.country}</p>
                  </>
                ) : (
                  <p className="text-muted-foreground">No address provided</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Billing Address
              </h3>
              <div className="p-3 bg-muted/50 rounded-lg text-sm">
                {order.billing_address ? (
                  <>
                    <p>{order.billing_address.name}</p>
                    <p>{order.billing_address.address}</p>
                    <p>
                      {order.billing_address.city}, {order.billing_address.state} {order.billing_address.zip}
                    </p>
                    <p>{order.billing_address.country}</p>
                  </>
                ) : (
                  <p className="text-muted-foreground">No address provided</p>
                )}
              </div>
            </div>
          </div>

          {/* Notes */}
          {order.notes && (
            <>
              <Separator />
              <div>
                <Label className="text-muted-foreground">Order Notes</Label>
                <p className="text-sm mt-1">{order.notes}</p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
