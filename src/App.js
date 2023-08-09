import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

import { Routes, Route, Link } from "react-router-dom"
import BookingPage from "./BookingPage"

function App() {
  return (
    <>
      <div className="container">
        <div className="headerNav">
          <Header />
          <div className="nav">
            <Nav />
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
