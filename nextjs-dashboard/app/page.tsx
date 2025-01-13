import PageDashboard from "./ui/dashboard/over-view/page";
import SideNav from "./ui/dashboard/sidenav";

export default function Page() {
  return (
    <main className="flex min-h-screen p-6" >
      <SideNav />
      <PageDashboard />
    </main>
  );
}
