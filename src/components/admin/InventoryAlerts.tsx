import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Package } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  id: string;
  name: string;
  sku: string;
  stock: number;
  price: number;
}

export const InventoryAlerts = () => {
  const [lowStockProducts, setLowStockProducts] = useState<Product[]>([]);
  const [outOfStockProducts, setOutOfStockProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInventoryAlerts();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('inventory-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products'
        },
        () => {
          loadInventoryAlerts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadInventoryAlerts = async () => {
    const { data: products } = await supabase
      .from("products")
      .select("*")
      .lte("stock", 10)
      .order("stock", { ascending: true });

    if (products) {
      setOutOfStockProducts(products.filter(p => p.stock === 0));
      setLowStockProducts(products.filter(p => p.stock > 0 && p.stock <= 10));
    }

    setLoading(false);
  };

  if (loading) {
    return <div>Loading inventory alerts...</div>;
  }

  return (
    <div className="space-y-4">
      {/* Out of Stock Alert */}
      {outOfStockProducts.length > 0 && (
        <Card className="p-6 border-destructive">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <h3 className="text-lg font-semibold text-destructive">
              Out of Stock ({outOfStockProducts.length})
            </h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {outOfStockProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="font-mono text-xs">{product.sku}</TableCell>
                  <TableCell>${Number(product.price).toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Out of Stock</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Low Stock Alert */}
      {lowStockProducts.length > 0 && (
        <Card className="p-6 border-yellow-500">
          <div className="flex items-center gap-2 mb-4">
            <Package className="h-5 w-5 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-600">
              Low Stock ({lowStockProducts.length})
            </h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lowStockProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="font-mono text-xs">{product.sku}</TableCell>
                  <TableCell>
                    <span className="font-semibold text-yellow-600">{product.stock}</span>
                  </TableCell>
                  <TableCell>${Number(product.price).toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                      Low Stock
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {outOfStockProducts.length === 0 && lowStockProducts.length === 0 && (
        <Card className="p-8 text-center">
          <Package className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
          <p className="text-muted-foreground">All products are well stocked!</p>
        </Card>
      )}
    </div>
  );
};
