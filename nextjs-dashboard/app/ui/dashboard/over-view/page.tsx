import RevenueChart from "@/app/ui/dashboard/revennue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { inter } from "../../fonts";
import { Suspense } from "react";
import CardWrapper from "../cards";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardSkeleton,
} from "@/app/ui/skeletons";

export default async function PageDashboard() {
  return (
    <>
      <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
        {/* Dashboard */}
      </h1>
      <main className="flex min-h-screen flex-col p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </main>
    </>
  );
}
