import BillingList from '@/components/billing/BillingList';
import BillingFilters from '@/components/billing/BillingFilters';

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Billing & Payments</h1>
        <a href="/billing/new" className="btn-primary">
          New Invoice
        </a>
      </div>
      
      <BillingFilters />
      
      <div className="card">
        <BillingList />
      </div>
    </div>
  );
}