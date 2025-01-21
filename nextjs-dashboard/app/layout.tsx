import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SideNav from "./ui/dashboard/sidenav";
import { Providers } from "./providers";
import AcmeLogo from "./ui/acme-logo";
import { inter } from "./ui/fonts";
import { Metadata } from "next";
import Link from "next/link";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <aside className="dark:bg-gray-800">
            <Link
              className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
              href="/"
            >
              <div className="w-32 text-white md:w-40">
                <AcmeLogo />
              </div>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </aside>
          <SideNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
