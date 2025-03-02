'use client';

import { useState } from 'react';

export default function GuestFilters() {
  const [status, setStatus] = useState('all');
  const [loyaltyTier, setLoyaltyTier] = useState('all');

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
            <option value="active">Active</option>
            <option value="checked-in">Checked In</option>
            <option value="checked-out">Checked Out</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
        
        <div>
          <label className="form-label">Loyalty Tier</label>
          <select
            value={loyaltyTier}
            onChange={(e) => setLoyaltyTier(e.target.value)}
            className="form-input"
          >
            <option value="all">All Tiers</option>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
        
        <div>
          <label className="form-label">Search</label>
          <input
            type="text"
            placeholder="Search by name, email, or phone"
            className="form-input"
          />
        </div>
      </div>
      
      <div className="mt-4 flex justify-end space-x-3">
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            setStatus('all');
            setLoyaltyTier('all');
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