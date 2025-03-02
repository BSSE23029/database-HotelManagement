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
  },
  {
    id: 'B-1002',
    guest: 'Sarah Johnson',
    room: '205 - Suite',
    checkIn: '2023-09-16',
    checkOut: '2023-09-20',
    status: 'Checked In',
    amount: '$1,200.00',
  },
  {
    id: 'B-1003',
    guest: 'Michael Brown',
    room: '304 - Twin Beds',
    checkIn: '2023-09-17',
    checkOut: '2023-09-19',
    status: 'Confirmed',
    amount: '$320.00',
  },
  {
    id: 'B-1004',
    guest: 'Emily Davis',
    room: '402 - Deluxe Queen',
    checkIn: '2023-09-18',
    checkOut: '2023-09-22',
    status: 'Pending',
    amount: '$580.00',
  },
  {
    id: 'B-1005',
    guest: 'Robert Wilson',
    room: '110 - Standard King',
    checkIn: '2023-09-19',
    checkOut: '2023-09-21',
    status: 'Confirmed',
    amount: '$290.00',
  },
];

export default function RecentBookings() {
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
              <td className="table-cell text-right text-sm font-medium">
                <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                  View
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-900">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}