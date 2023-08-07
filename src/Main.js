import mainPhoto from "./assets/images/restauranfood.jpg"
import greekSaladPhoto from "./assets/images/greek salad.jpg"
import deliveryIcon from "./assets/icons/DeliveryIcon.svg"
import bruchetta from "./assets/images/bruchetta.svg"
import lemonDessert from "./assets/images/lemon dessert.jpg"

const Main = () => {
    return (
        <section>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    We are a family owned Mediterranean resturant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button>Reserve a Table</button>
                <img src={mainPhoto} alt="Photo of dish"/>
            </div>

            <div>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
                <div>
                    <img src={greekSaladPhoto} alt="Photo of Greek Salad"/>
                    <h4>Greek Salad</h4>
                    <p>$12.99</p>
                    <p>
                        The famous greek salad of crispy lettuce, peppers,
                        olives and our Chicago style feta cheese.
                        Garnished with chrunchy garlic and rosemary croutons.
                    </p>
                    <a href="#">Order a delivery</a>
                    <img src={deliveryIcon} alt="delivery icon"/>
                </div>
                <div>
                    <img src={bruchetta} alt="Photo of Bruchetta"/>
                    <h4>Bruchetta</h4>
                    <p>$5.99</p>
                    <p>
                        Our bruchetta is made from grilled bread that has been smeared with garlic
                        and seasoned with salt and olive oil.
                    </p>
                    <a href="#">Order a delivery</a>
                    <img src={deliveryIcon} alt="delivery icon"/>
                </div>
                <div>
                    <img src={lemonDessert} alt="Photo of Lemon Dessert"/>
                    <h4>Lemon Dessert</h4>
                    <p>$5.00</p>
                    <p>
                        This comes straight from grandma's recipe book,
                        every last ingredient has been sourced and is as authentic as can be imagined.
                    </p>
                    <a href="#">Order a delivery</a>
                    <img src={deliveryIcon} alt="delivery icon"/>
                </div>
            </div>
        </section>
    );
};

export default Main;