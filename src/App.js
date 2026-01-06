import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUS from "./components/AboutUS";
import Offer from "./components/Offer";
import Feature from "./components/Feature";
import OurProduct from "./components/OurProduct";
import News from "./components/News";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurCustomerCount from "./components/OurCustomerCount"
import ProductCarousel from "./components/ProductCarousel";
import TopBanner from "./components/TopBanner";

function App({ children }) {

    return (



        <div className="App">

            <TopBanner />
            <Navbar />
            <Header />
            <ProductCarousel />
            <AboutUS />
            <Offer />
            <Feature />
            <OurProduct />
            <News />
            <OurCustomerCount />
            <Teams />
            <Contact />
            <Footer />
            <a href="https://m.me/110442531272528" target="_blank" rel="noreferrer" className="messenger-fab">
                <span className="material-icons">chat</span>
            </a>
        </div>
    )
};

export default App;