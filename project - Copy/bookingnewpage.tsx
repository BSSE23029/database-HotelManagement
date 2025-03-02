'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roomType: string;
  adults: number;
  children: number;
  specialRequests: string;
  paymentMethod: string;
};

export default function NewBookingPage() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log({
      ...data,
      checkInDate,
      checkOutDate,
    });
    // Here you would typically send the data to your API
    alert('Booking created successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">New Booking</h1>
        <a href="/bookings" className="btn-secondary">
          Back to Bookings
        </a>
      </div>
      
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-4">Guest Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="form-input"
                  {...register('firstName', { required: 'First name is required' })}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="form-input"
                  {...register('lastName', { required: 'Last name is required' })}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input"
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Check-in Date</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  className="form-input"
                  placeholderText="Select check-in date"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">Check-out Date</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate || new Date()}
                  className="form-input"
                  placeholderText="Select check-out date"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="roomType" className="form-label">Room Type</label>
                <select
                  id="roomType"
                  className="form-input"
                  {...register('roomType', { required: 'Room type is required' })}
                >
                  <option value="">Select a room type</option>
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                  <option value="executive">Executive</option>
                </select>
                {errors.roomType && (
                  <p className="mt-1 text-sm text-red-600">{errors.roomType.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="adults" className="form-label">Adults</label>
                  <select
                    id="adults"
                    className="form-input"
                    {...register('adults', { required: 'Required' })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="children" className="form-label">Children</label>
                  <select
                    id="children"
                    className="form-input"
                    {...register('children')}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="specialRequests" className="form-label">Special Requests</label>
                <textarea
                  id="specialRequests"
                  rows={3}
                  className="form-input"
                  {...register('specialRequests')}
                ></textarea>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">Payment Information</h2>
            <div>
              <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
              <select
                id="paymentMethod"
                className="form-input"
                {...register('paymentMethod', { required: 'Payment method is required' })}
              >
                <option value="">Select a payment method</option>
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash (at check-in)</option>
              </select>
              {errors.paymentMethod && (
                <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
              )}
            </div>
            
            {/* Credit card fields would be conditionally rendered here based on payment method */}
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}