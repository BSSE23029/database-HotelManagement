import RoomList from '@/components/rooms/RoomList';
import RoomFilters from '@/components/rooms/RoomFilters';

export default function RoomsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Rooms</h1>
        <a href="/rooms/new" className="btn-primary">
          Add New Room
        </a>
      </div>
      
      <RoomFilters />
      
      <div className="card">
        <RoomList />
      </div>
    </div>
  );
}