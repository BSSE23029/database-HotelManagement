'use client';

import { useState } from 'react';

export default function RoomFilters() {
  const [status, setStatus] = useState('all');
  const [type, setType] = useState('all');
  const [floor, setFloor] = useState('all');

  return (
    <div className="card">
      <h2 className="text-lg font-medium mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="form-label">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-input"
          >
            <option value="all">All Statuses</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="reserved">Reserved</option>
            <option value="maintenance">Maintenance</option>
            <option value="cleaning">Cleaning</option>
          </select>
        </div>
        
        <div>
          <label className="form-label">Room Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="form-input"
          >
            <option value="all">All Types</option>
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
            <option value="executive">Executive</option>
          </select>
        </div>
        
        <div>
          <label className="form-label">Floor</label>
          <select
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="form-input"
          >
            <option value="all">All Floors</option>
            <option value="1">1st Floor</option>
            <option value="2">2nd Floor</option>
            <option value="3">3rd Floor</option>
            <option value="4">4th Floor</option>
          </select>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end space-x-3">
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            setStatus('all');
            setType('all');
            setFloor('all');
          }}
        >
          Reset
        </button>
        <button type="button" className="btn-primary">
          Apply Filters
        </button>
      </div>
    </div>
  );
}