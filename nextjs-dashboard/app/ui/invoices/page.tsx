import Breadcrumbs from "./breadcrumbs";
import Form from "./create-form";
import Pagination from "./pagination";
import InvoicesTable from "./table";

export default function InvoicesPage() {
  return (
    <>
      <Form customers={[]} />
      <Breadcrumbs breadcrumbs={[]}></Breadcrumbs>
      <Pagination totalPages={2} />
      {/* <InvoicesTable query={""} currentPage={0} /> */}
    </>
  );
}
