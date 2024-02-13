import { Suspense } from 'react';
import Pagination from './components/pagination';
 
export default function PaginationPage() {

  return (
    <div>
      <div >
        <h1 >Invoices</h1>
      </div>
      <div>
        {/* <Search placeholder="Search invoices..." />
        <CreateInvoice /> */}
      </div>
       {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div >
        <Pagination pageCount={30} />
      </div>
    </div>
  );
}
