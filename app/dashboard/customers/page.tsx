import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">

      </div>
      {customers.map((customer) => (
        <div key={customer.id} className="flex items-center justify-between gap-2 md:mt-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
              <p className="text-gray-600">{customer.name.charAt(0)}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{customer.name}</p>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}