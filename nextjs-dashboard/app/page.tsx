import PageDashboard from "./ui/dashboard/page";
import SideNav from "./ui/dashboard/sidenav";

export default function Page() {
  return (
    <main className="flex min-h-screen p-6" >
      <SideNav />
      <PageDashboard />
    </main>
  );
}
