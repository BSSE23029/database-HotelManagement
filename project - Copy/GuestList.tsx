'use client';

const guests = [
  {
    id: 'G-1001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    status: 'Checked In',
    loyaltyTier: 'Gold',
    lastStay: '2023-09-15',
    totalStays: 12,
    totalSpent: '$4,850',
  },
  {
    id: 'G-1002',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 234-5678',
    status: 'Active',
    loyaltyTier: 'Platinum',
    lastStay: '2023-08-22',
    totalStays: 28,
    totalSpent: '$12,450',
  },
  {
    id: 'G-1003',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '+1 (555) 345-6789',
    status: 'Checked Out',
    loyaltyTier: 'Silver',
    lastStay: '2023-09-10',
    totalStays: 8,
    totalSpent: '$3,200',
  },
  {
    id: 'G-1004',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 456-7890',
    status: 'Active',
    loyaltyTier: 'Bronze',
    lastStay: '2023-07-15',
    totalStays: 3,
    totalSpent: '$1,250',
  },
  {
    id: 'G-1005',
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    phone: '+1 (555) 567-8901',
    status: 'Blacklisted',
    loyaltyTier: 'Bronze',
    lastStay: '2023-06-30',
    totalStays: 2,
    totalSpent: '$780',
  },
  {
    id: 'G-1006',
    name: 'Jennifer Lee',
    email: 'jennifer.lee@example.com',
    phone: '+1 (555) 678-9012',
    status: 'Checked In',
    loyaltyTier: 'Gold',
    lastStay: '2023-09-15',
    totalStays: 15,
    totalSpent: '$6,300',
  },
  {
    id: 'G-1007',
    name: 'David Miller',
    email: 'david.miller@example.com',
    phone: '+1 (555) 789-0123',
    status: 'Active',
    loyaltyTier: 'Silver',
    lastStay: '2023-08-05',
    totalStays: 7,
    totalSpent: '$2,900',
  },
  {
    id: 'G-1008',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@example.com',
    phone: '+1 (555) 890-1234',
    status: 'Active',
    loyaltyTier: 'Bronze',
    lastStay: '2023-07-20',
    totalStays: 4,
    totalSpent: '$1,600',
  },
  {
    id: 'G-1009',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    phone: '+1 (555) 901-2345',
    status: 'Checked In',
    loyaltyTier: 'Platinum',
    lastStay: '2023-09-14',
    totalStays: 32,
    totalSpent: '$15,800',
  },
  {
    id: 'G-1010',
    name: 'Patricia White',
    email: 'patricia.white@example.com',
    phone: '+1 (555) 012-3456',
    status: 'Active',
    loyaltyTier: 'Gold',
    lastStay: '2023-08-30',
    totalStays: 18,
    totalSpent: '$7,200',
  },
];

export default function GuestList() {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">Guest ID</th>
            <th className="table-header-cell">Name</th>
            <th className="table-header-cell">Email</th>
            <th className="table-header-cell">Phone</th>
            <th className="table-header-cell">Status</th>
            <th className="table-header-cell">Loyalty Tier</th>
            <th className="table-header-cell">Last Stay</th>
            <th className="table-header-cell">Total Stays</th>
            <th className="table-header-cell">Total Spent</th>
            <th className="table-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {guests.map((guest) => (
            <tr key={guest.id} className="table-row">
              <td className="table-cell font-medium text-gray-900">{guest.id}</td>
              <td className="table-cell">{guest.name}</td>
              <td className="table-cell">{guest.email}</td>
              <td className="table-cell">{guest.phone}</td>
              <td className="table-cell">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  guest.status === 'Checked In' ? 'bg-blue-100 text-blue-800' :
                  guest.status === 'Checked Out' ? 'bg-green-100 text-green-800' :
                  guest.status === 'Blacklisted' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {guest.status}
                </span>
              </td>
              <td className="table-cell">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  guest.loyaltyTier === 'Bronze' ? 'bg-yellow-100 text-yellow-800' :
                  guest.loyaltyTier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                  guest.loyaltyTier === 'Gold' ? 'bg-yellow-300 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {guest.loyaltyTier}
                </span>
              </td>
              <td className="table-cell">{guest.lastStay}</td>
              <td className="table-cell">{guest.totalStays}</td>
              <td className="table-cell">{guest.totalSpent}</td>
              <td className="table-cell text-right text-sm font-medium">
                <a href={`/guests/${guest.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                  View
                </a>
                <a href={`/guests/${guest.id}/edit`} className="text-blue-600 hover:text-blue-900">
                  Edit
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