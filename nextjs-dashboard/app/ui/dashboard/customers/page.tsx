import { fetchCustomers } from "@/app/lib/data";
import Table from "./table";
import mapToFormattedCustomers from "@/app/lib/definitions";

export default async function Page() {
  const customers = await fetchCustomers();
  const formattedCustomers = mapToFormattedCustomers(customers);

  return (
    <>
      <Table customers={formattedCustomers} />
    </>
  );
}
