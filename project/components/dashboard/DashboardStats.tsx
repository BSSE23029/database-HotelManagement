'use client';

import {
  UserGroupIcon,
  KeyIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Bookings',
    value: '128',
    icon: ClipboardDocumentCheckIcon,
    change: '+12%',
    changeType: 'increase',
  },
  {
    name: 'Room Occupancy',
    value: '78%',
    icon: KeyIcon,
    change: '+5%',
    changeType: 'increase',
  },
  {
    name: 'Revenue',
    value: '$24,500',
    icon: CurrencyDollarIcon,
    change: '+18%',
    changeType: 'increase',
  },
  {
    name: 'New Guests',
    value: '42',
    icon: UserGroupIcon,
    change: '+8%',
    changeType: 'increase',
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <stat.icon className="h-10 w-10 text-blue-600" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4">
            <div className={`text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}