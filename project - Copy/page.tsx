import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentBookings from '@/components/dashboard/RecentBookings';
import RoomOccupancy from '@/components/dashboard/RoomOccupancy';
import RevenueChart from '@/components/dashboard/RevenueChart';

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-medium mb-4">Room Occupancy</h2>
          <RoomOccupancy />
        </div>
        
        <div className="card">
          <h2 className="text-lg font-medium mb-4">Revenue Overview</h2>
          <RevenueChart />
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-lg font-medium mb-4">Recent Bookings</h2>
        <RecentBookings />
      </div>
    </div>
  );
}