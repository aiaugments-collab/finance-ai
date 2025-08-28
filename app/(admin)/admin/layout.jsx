import { redirect } from "next/navigation";
import { checkUser } from "@/lib/checkUser";
import AdminSidebar from "@/components/admin-sidebar";

export const metadata = {
  title: "Admin Dashboard - Finance AI",
  description: "Administrative dashboard for Finance AI platform",
};

const AdminLayout = async ({ children }) => {
  const user = await checkUser();
  
  // Simple admin check - in production, you'd check for admin role
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Admin Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Monitor and manage your Finance AI platform</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">System Online</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Admin Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
