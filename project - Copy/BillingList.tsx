'use client';

const invoices = [
  {
    id: 'INV-1001',
    guest: 'John Smith',
    bookingId: 'B-1001',
    date: '2023-09-18',
    dueDate: '2023-09-18',
    amount: '$450.00',
    status: 'Paid',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'INV-1002',
    guest: 'Sarah Johnson',
    bookingId: 'B-1002',
    date: '2023-09-16',
    dueDate: '2023-09-16',
    amount: '$1,200.00',
    status: 'Paid',
    paymentMethod: 'PayPal',
  },
  {
    id: 'INV-1003',
    guest: 'Michael Brown',
    bookingId: 'B-1003',
    date: '2023-09-17',
    dueDate: '2023-09-19',
    amount: '$320.00',
    status: 'Pending',
    paymentMethod: 'Pending',
  },
  {
    id: 'INV-1004',
    guest: 'Emily Davis',
    bookingId: 'B-1004',
    date: '2023-09-18',
    dueDate: '2023-09-22',
    amount: '$580.00',
    status: 'Pending',
    paymentMethod: 'Pending',
  },
  {
    id: 'INV-1005',
    guest: 'Robert Wilson',
    bookingId: 'B-1005',
    date: '2023-09-19',
    dueDate: '2023-09-19',
    amount: '$290.00',
    status: 'Paid',
    paymentMethod: 'Debit Card',
  },
  {
    id: 'INV-1006',
    guest: 'Jennifer Lee',
    bookingId: 'B-1006',
    date: '2023-09-20',
    dueDate: '2023-09-20',
    amount: '$1,500.00',
    status: 'Paid',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'INV-1007',
    guest: 'David Miller',
    bookingId: 'B-1007',
    date: '2023-09-21',
    dueDate: '2023-09-23',
    amount: '$320.00',
    status: 'Pending',
    paymentMethod: 'Pending',
  },
  {
    id: 'INV-1008',
    guest: 'Lisa Anderson',
    bookingId: 'B-1008',
    date: '2023-09-22',
    dueDate: '2023-09-22',
    amount: '$450.00',
    status: 'Paid',
    paymentMethod: 'Cash',
  },
  {
    id: 'INV-1009',
    guest: 'James Taylor',
    bookingId: 'B-1009',
    date: '2023-09-23',
    dueDate: '2023-09-28',
    amount: '$1,500.00',
    status: 'Pending',
    paymentMethod: 'Pending',
  },
  {
    id: 'INV-1010',
    guest: 'Patricia White',
    bookingId: 'B-1010',
    date: '2023-09-24',
    dueDate: '2023-09-26',
    amount: '$320.00',
    status: 'Overdue',
    paymentMethod: 'Pending',
  },
];

export default function BillingList() {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">Invoice #</th>
            <th className="table-header-cell">Guest</th>
            <th className="table-header-cell">Booking ID</th>
            <th className="table-header-cell">Date</th>
            <th className="table-header-cell">Due Date</th>
            <th className="table-header-cell">Amount</th>
            <th className="table-header-cell">Status</th>
            <th className="table-header-cell">Payment Method</th>
            <th className="table-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="table-row">
              <td className="table-cell font-medium text-gray-900">{invoice.id}</td>
              <td className="table-cell">{invoice.guest}</td>
              <td className="table-cell">{invoice.bookingId}</td>
              <td className="table-cell">{invoice.date}</td>
              <td className="table-cell">{invoice.dueDate}</td>
              <td className="table-cell">{invoice.amount}</td>
              <td className="table-cell">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
                  invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  invoice.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                  invoice.status === 'Refunded' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {invoice.status}
                </span>
              </td>
              <td className="table-cell">{invoice.paymentMethod}</td>
              <td className="table-cell text-right text-sm font-medium">
                <a href={`/billing/${invoice.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                  View
                </a>
                {invoice.status === 'Pending' && (
                  <a href={`/billing/${invoice.id}/pay`} className="text-green-600 hover:text-green-900 mr-3">
                    Pay
                  </a>
                )}
                <a href={`/billing/${invoice.id}/print`} className="text-blue-600 hover:text-blue-900">
                  Print
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">20</span> results
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary px-3 py-1">Previous</button>
          <button className="btn-primary px-3 py-1">Next</button>
        </div>
      </div>
    </div>
  );
}