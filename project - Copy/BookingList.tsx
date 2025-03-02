'use client';

const bookings = [
  {
    id: 'B-1001',
    guest: 'John Smith',
    room: '101 - Deluxe King',
    checkIn: '2023-09-15',
    checkOut: '2023-09-18',
    status: 'Confirmed',
    amount: '$450.00',
    paymentStatus: 'Paid',
  },
  {
    id: 'B-1002',
    guest: 'Sarah Johnson',
    room: '205 - Suite',
    checkIn: '2023-09-16',
    checkOut: '2023-09-20',
    status: 'Checked In',
    amount: '$1,200.00',
    paymentStatus: 'Paid',
  },
  {
    id: 'B-1003',
    guest: 'Michael Brown',
    room: '304 - Twin Beds',
    checkIn: '2023-09-17',
    checkOut: '2023-09-19',
    status: 'Confirmed',
    amount: '$320.00',
    paymentStatus: 'Pending',
  },
  {
    id: 'B-1004',
    guest: 'Emily Davis',
    room: '402 - Deluxe Queen',
    checkIn: '2023-09-18',
    checkOut: '2023-09-22',
    status: 'Pending',
    amount: '$580.00',
    paymentStatus: 'Pending',
  },
  {
    id: 'B-1005',
    guest: 'Robert Wilson',
    room: '110 - Standard King',
    checkIn: '2023-09-19',
    checkOut: '2023-09-21',
    status: 'Confirmed',
    amount: '$290.00',
    paymentStatus: 'Paid',
  },
  {
    id: 'B-1006',
    guest: 'Jennifer Lee',
    room: '208 - Suite',
    checkIn: '2023-09-20',
    checkOut: '2023-09-25',
    status: 'Confirmed',
    amount: '$1,500.00',
    paymentStatus: 'Paid',
  },
  {
    id: 'B-1007',
    guest: 'David Miller',
    room: '305 - Twin Beds',
    checkIn: '2023-09-21',
    checkOut: '2023-09-23',
    status: 'Pending',
    amount: '$320.00',
    paymentStatus: 'Pending',
  },
  {
    id: 'B-1008',
    guest: 'Lisa Anderson',
    room: '102 - Deluxe King',
    checkIn: '2023-09-22',
    checkOut: '2023-09-24',
    status: 'Confirmed',
    amount: '$450.00',
    paymentStatus: 'Paid',
  },
  {
    id: 'B-1009',
    guest: 'James Taylor',
    room: '209 - Suite',
    checkIn: '2023-09-23',
    checkOut: '2023-09-28',
    status: 'Confirmed',
    amount: '$1,500.00',
    paymentStatus: 'Pending',
  },
  {
    id: 'B-1010',
    guest: 'Patricia White',
    room: '306 - Twin Beds',
    checkIn: '2023-09-24',
    checkOut: '2023-09-26',
    status: 'Pending',
    amount: '$320.00',
    paymentStatus: 'Pending',
  },
];

export default function BookingList() {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">Booking ID</th>
            <th className="table-header-cell">Guest</th>
            <th className="table-header-cell">Room</th>
            <th className="table-header-cell">Check In</th>
            <th className="table-header-cell">Check Out</th>
            <th className="table-header-cell">Status</th>
            <th className="table-header-cell">Amount</th>
            <th className="table-header-cell">Payment</th>
            <th className="table-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {bookings.map((booking) => (
            <tr key={booking.id} className="table-row">
              <td className="table-cell font-medium text-gray-900">{booking.id}</td>
              <td className="table-cell">{booking.guest}</td>
              <td className="table-cell">{booking.room}</td>
              <td className="table-cell">{booking.checkIn}</td>
              <td className="table-cell">{booking.checkOut}</td>
              <td className="table-cell">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                  booking.status === 'Checked In' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {booking.status}
                </span>
              </td>
              <td className="table-cell">{booking.amount}</td>
              <td className="table-cell">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  booking.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {booking.paymentStatus}
                </span>
              </td>
              <td className="table-cell text-right text-sm font-medium">
                <a href={`/bookings/${booking.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                  View
                </a>
                <a href={`/bookings/${booking.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-3">
                  Edit
                </a>
                <a href="#" className="text-red-600 hover:text-red-900">
                  Cancel
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