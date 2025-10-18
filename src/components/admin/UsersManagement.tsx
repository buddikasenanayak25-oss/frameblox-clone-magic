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
import { Shield } from "lucide-react";

interface UserProfile {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  created_at: string;
}

interface UserRole {
  user_id: string;
  role: string;
}

export const UsersManagement = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [userRoles, setUserRoles] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data: profiles, error: profilesError } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (profilesError) {
      toast({ title: "Error loading users", variant: "destructive" });
      return;
    }

    const { data: roles, error: rolesError } = await supabase
      .from("user_roles")
      .select("user_id, role");

    if (rolesError) {
      toast({ title: "Error loading roles", variant: "destructive" });
      return;
    }

    const rolesMap: Record<string, string> = {};
    roles?.forEach((role: UserRole) => {
      rolesMap[role.user_id] = role.role;
    });

    setUsers(profiles || []);
    setUserRoles(rolesMap);
    setLoading(false);
  };

  const updateUserRole = async (userId: string, newRole: "admin" | "user") => {
    const { error: deleteError } = await supabase
      .from("user_roles")
      .delete()
      .eq("user_id", userId);

    if (deleteError) {
      toast({ title: "Error updating role", variant: "destructive" });
      return;
    }

    const { error: insertError } = await supabase
      .from("user_roles")
      .insert([{ user_id: userId, role: newRole }]);

    if (insertError) {
      toast({ title: "Error updating role", variant: "destructive" });
      return;
    }

    toast({ title: "User role updated successfully" });
    loadUsers();
  };

  if (loading) return <div>Loading users...</div>;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                {user.first_name && user.last_name
                  ? `${user.first_name} ${user.last_name}`
                  : "N/A"}
              </TableCell>
              <TableCell>{user.phone || "N/A"}</TableCell>
              <TableCell>
                <Select
                  value={userRoles[user.user_id] || "user"}
                  onValueChange={(value) => updateUserRole(user.user_id, value as "admin" | "user")}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Admin
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {users.length === 0 && (
        <p className="text-center text-muted-foreground py-8">No users found</p>
      )}
    </Card>
  );
};
