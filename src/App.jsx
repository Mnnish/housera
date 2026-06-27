import { useState, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./pages/Preloader";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Index from "./component/Index";
import PageNotFound from "./pages/404";
import Contactus from "./pages/contactus";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Properties from "./pages/Properties";
import FAQSection from "./component/FAQ's/FAQSection";
import Aboutus from "./pages/Aboutus";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div className="App d-flex flex-column min-vh-100">
        {loading && <Preloader />}
        <Navbar />

        <Routes>
          <Route path="/housera" element={<Inde />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-details/" element={<PropertyDetails />} />
          <Route path="/faqs" element={<FAQSection />} />
          <Route path="/about-us" element={<Aboutus />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
