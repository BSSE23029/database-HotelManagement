import GuestList from '@/components/guests/GuestList';
import GuestFilters from '@/components/guests/GuestFilters';

export default function GuestsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Guests</h1>
        <a href="/guests/new" className="btn-primary">
          Add New Guest
        </a>
      </div>
      
      <GuestFilters />
      
      <div className="card">
        <GuestList />
      </div>
    </div>
  );
}