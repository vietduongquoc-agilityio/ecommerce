import Form from "./create-form";
import Pagination from "./pagination";
import InvoicesTable from "./table";

export default function InvoicesPage() {
  return (
    <>
      <Form customers={[]} />
      <Pagination totalPages={2} />
      {/* <InvoicesTable query={"âsasas"} currentPage={0} /> */}
    </>
  );
}
