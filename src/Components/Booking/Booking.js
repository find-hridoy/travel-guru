import React from 'react';
import BookingContent from '../BookingContent/BookingContent';
import Header from '../Header/Header';
import './Booking.css';

const Booking = () => {
    return (
        <div className="booking-area">
            <Header />
            <BookingContent />
        </div>
    );
};

export default Booking;