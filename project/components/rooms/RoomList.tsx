'use client';

const rooms = [
  {
    id: 101,
    type: 'Deluxe King',
    floor: 1,
    status: 'Available',
    price: '$150/night',
    lastCleaned: '2023-09-15',
    features: ['King Bed', 'Ocean View', 'Mini Bar'],
  },
  {
    id: 102,
    type: 'Deluxe King',
    floor: 1,
    status: 'Occupied',
    price: '$150/night',
    lastCleaned: '2023-09-14',
    features: ['King Bed', 'Ocean View', 'Mini Bar'],
  },
  {
    id: 103,
    type: 'Standard Queen',
    floor: 1,
    status: 'Reserved',
    price: '$120/night',
    lastCleaned: '2023-09-15',
    features: ['Queen Bed', 'City View'],
  },
  {
    id: 201,
    type: 'Suite',
    floor: 2,
    status: 'Available',
    price: '$300/night',
    lastCleaned: '2023-09-15',
    features: ['King Bed', 'Living Room', 'Ocean View', 'Mini Bar', 'Jacuzzi'],
  },
  {
    id: 202,
    type: 'Deluxe Twin',
    floor: 2,
    status: 'Maintenance',
    price: '$140/night',
    lastCleaned: '2023-09-13',
    features: ['Twin Beds', 'City View', 'Mini Bar'],
  },
  {
    id: 203,
    type: 'Standard Queen',
    floor: 2,
    status: 'Cleaning',
    price: '$120/night',
    lastCleaned: '2023-09-15',
    features: ['Queen Bed', 'City View'],
  },
  {
    id: 301,
    type: 'Executive Suite',
    floor: 3,
    status: 'Available',
    price: '$400/night',
    lastCleaned: '2023-09-15',
    features: ['King Bed', 'Living Room', 'Dining Area', 'Ocean View', 'Mini Bar', 'Jacuzzi'],
  },
  {
    id: 302,
    type: 'Deluxe King',
    floor: 3,
    status: 'Occupied',
    price: '$150/night',
    lastCleaned: '2023-09-14',
    features: ['King Bed', 'Ocean View', 'Mini Bar'],
  },
  {
    id: 303,
    type: 'Deluxe Twin',
    floor: 3,
    status: 'Available',
    price: '$140/night',
    lastCleaned: '2023-09-15',
    features: ['Twin Beds', 'City View', 'Mini Bar'],
  },
  {
    id: 401,
    type: 'Presidential Suite',
    floor: 4,
    status: 'Reserved',
    price: '$800/night',
    lastCleaned: '2023-09-15',
    features: ['King Bed', 'Living Room', 'Dining Area', 'Kitchen', 'Ocean View', 'Mini Bar', 'Jacuzzi', 'Private Terrace'],
  },
];

export default function RoomList() {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">Room #</th>
            <th className="table-header-cell">Type</th>
            <th className="table-header-cell">Floor</th>
            <th className="table-header-cell">Status</th>
            <th className="table-header-cell">Price</th>
            <th className="table-header-cell">Last Cleaned</th>
            <th className="table-header-cell">Features</th>
            <th className="table-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {rooms.map((room) => (
            <tr key={room.id} className="table-row">
              <td className="table-cell font-medium text-gray-900">{room.id}</td>
              <td className="table-cell">{room.type}</td>
              <td className="table-cell">{room.floor}</td>
              <td className="table-cell">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  room.status === 'Available' ? 'bg-green-100 text-green-800' :
                  room.status === 'Occupied' ? 'bg-blue-100 text-blue-800' :
                  room.status === 'Reserved' ? 'bg-yellow-100 text-yellow-800' :
                  room.status === 'Maintenance' ? 'bg-red-100 text-red-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {room.status}
                </span>
              </td>
              <td className="table-cell">{room.price}</td>
              <td className="table-cell">{room.lastCleaned}</td>
              <td className="table-cell">
                <div className="flex flex-wrap gap-1">
                  {room.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {room.features.length > 2 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                      +{room.features.length - 2} more
                    </span>
                  )}
                </div>
              </td>
              <td className="table-cell text-right text-sm font-medium">
                <a href={`/rooms/${room.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                  View
                </a>
                <a href={`/rooms/${room.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-3">
                  Edit
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-900">
                  Status
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