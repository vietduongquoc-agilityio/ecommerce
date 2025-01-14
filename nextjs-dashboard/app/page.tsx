import Link from "next/link";
import AcmeLogo from "./ui/acme-logo";
import PageDashboard from "./ui/dashboard/over-view/page";
import SideNav from "./ui/dashboard/sidenav";

export const experimental_ppr = true;
export default function Page() {
  return (
    <main className="flex p-6 ">
      <aside>
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
          href="/"
        >
          <div className="w-32 text-white md:w-40">
            <AcmeLogo />
          </div>
        </Link>
        {/* <Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Link> */}
        <SideNav />
      </aside>
      <PageDashboard />
    </main>
  );
}
