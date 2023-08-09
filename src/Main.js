import mainPhoto from "./assets/images/restauranfood.jpg"
import greekSaladPhoto from "./assets/images/greek salad.jpg"
import deliveryIcon from "./assets/icons/DeliveryIcon.svg"
import bruchetta from "./assets/images/bruchetta.svg"
import lemonDessert from "./assets/images/lemon dessert.jpg"

import React, { useReducer, useEffect } from "react";

import { Routes, Route, Link, useNavigate} from "react-router-dom"
import BookingPage from "./BookingPage"

import ConfirmedBooking from "./ConfirmedBooking";


const Main = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed-booking")
        }
    }

    return (
        <section>
            <Routes>
                <Route path="/booking-page" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking/> } />
            </Routes>
            <div className="mainTop">
                <div className="mainTopLeft partOne">
                    <h1 className="mainTitle">Little Lemon</h1>
                    <h2 className="mainSubTitle">Chicago</h2>
                    <p className="mainTopP">
                        We are a family owned Mediterranean resturant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <button className="bigButton"><Link to="/booking-page">Reserve a Table</Link></button>
                </div>
                <div className="mainTopRight part">
                    <img className="mainDishPhoto" src={mainPhoto} alt="Photo of dish"/>
                </div>
            </div>
            <div className="mainBottom">
    
                <div className="bottomTopShelf">
                    <h1>This weeks specials!</h1>
                    <button className="bigButton onlineMenu">Online Menu</button>
                </div>
                <div className="cardContainer">
                    <div className="cardOne">
                        <img className="globalImages cardImage" src={greekSaladPhoto} alt="Photo of Greek Salad"/>
                        <div className="cardTitleAndPrice">
                            <h4>Greek Salad</h4>
                            <p className="price">$12.99</p>
                        </div>
                        <p className="cardDesc">
                            The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese.
                            Garnished with chrunchy garlic and rosemary croutons.
                        </p>
                        <div className="orderLinkAndicon">
                            <a href="#">Order a delivery</a>
                            <img className="deliveryIcons" src={deliveryIcon} alt="delivery icon"/>
                        </div>
                    </div>
                    <div className="cardTwo">
                        <img className="globalImages bruchettaImage" src={bruchetta} alt="Photo of Bruchetta"/>
                        <div className="cardTitleAndPrice">
                            <h4>Bruchetta</h4>
                            <p className="price">$5.99</p>
                        </div>
                        <p className="cardDesc">
                            Our bruchetta is made from grilled bread that has been smeared with garlic
                            and seasoned with salt and olive oil.
                        </p>
                        <div className="orderLinkAndicon">
                            <a href="#">Order a delivery</a>
                            <img className="deliveryIcons" src={deliveryIcon} alt="delivery icon"/>
                        </div>
                    </div>
                    <div className="cardThree">
                        <img className="globalImages cardImage" src={lemonDessert} alt="Photo of Lemon Dessert"/>
                        <div className="cardTitleAndPrice">
                            <h4>Lemon Dessert</h4>
                            <p className="price">$5.00</p>
                        </div>
                        <p className="cardDesc">
                            This comes straight from grandma's recipe book,
                            every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <div className="orderLinkAndicon">
                            <a href="#">Order a delivery</a>
                            <img className="deliveryIcons" src={deliveryIcon} alt="delivery icon"/>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Main;