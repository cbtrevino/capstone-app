import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    return (
        <div class="bookingPage">
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </div>
    );
};

export default BookingPage;