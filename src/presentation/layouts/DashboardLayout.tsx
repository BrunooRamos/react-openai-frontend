import { Outlet } from "react-router-dom";
import { menuRoutes } from '../router/router';
import { SidebarMenuItem, UserName } from '../components';

export const DashboardLayout = () => {
  return (
    <main className="flex min-h-screen">
      <nav className="w-72 bg-zinc-100 flex flex-col justify-between">
        <div>
          <h1 className="text-xl text-zinc-800 p-4 mb-4 border-b border-zinc-200 bg-gradient-to-r from-zinc-800 to-zinc-600 text-transparent bg-clip-text">
            BrunoWebApp
          </h1>

          <div className="space-y-2">
            {menuRoutes.map(option => (
              <SidebarMenuItem 
                key={option.to} 
                to={option.to}
                icon={option.icon}
                title={option.title}
              />
            ))}
          </div>
        </div>

        <UserName name="Bruno Ramos" />
      </nav>

      <section className="flex-1 p-8">
        <div className="h-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </section>
    </main>
  );
};