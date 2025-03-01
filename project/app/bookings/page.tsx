import BookingList from '@/components/bookings/BookingList';
import BookingFilters from '@/components/bookings/BookingFilters';

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Bookings</h1>
        <a href="/bookings/new" className="btn-primary">
          New Booking
        </a>
      </div>
      
      <BookingFilters />
      
      <div className="card">
        <BookingList />
      </div>
    </div>
  );
}