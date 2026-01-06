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

            <div className="fab-container">

                {/* 1. Facebook Page - ลิงก์ไปหน้าโปรไฟล์เพจ */}
                <a href="https://www.facebook.com/110442531272528"
                    target="_blank"
                    rel="noreferrer"
                    className="fab-item facebook"
                    title="Logins Medical Facebook Page">
                    <svg viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>

                {/* 2. Messenger - เน้นเป็นสีส้มคุมธีม LogInS Medical */}
                <a href="https://m.me/110442531272528"
                    target="_blank"
                    rel="noreferrer"
                    className="fab-item messenger"
                    title="Chat with us">
                    <svg viewBox="0 0 28 28"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2C7.373 2 2 6.863 2 12.87c0 3.42 1.72 6.475 4.397 8.414.23.167.362.433.362.717v2.853a.75.75 0 001.21.587l3.227-2.58a.75.75 0 01.472-.167h2.332c6.627 0 12-4.863 12-10.871C26 6.863 20.627 2 14 2z" 
                        fill="white" />
                        <path d="M8.25 15.5l3.5-5.5 3.5 3 4.5-5.5-3.5 5.5-3.5-3-4.5 5.5z"
                            fill="#F17834" />
                    </svg>
                </a>
            </div>
        </div>
    )
};

export default App;