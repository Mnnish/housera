import React from "react";
import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Use brand icons from here
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-12 col-lg-2">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="nav-logo-icon">
                <Home size={24} />
              </div>
              <div>
                <div className="footer-brand-name">Housera</div>
                <div className="footer-brand-tag">Your Home, Our Priority</div>
              </div>
            </div>
            <p className="footer-desc mb-4">
              NCR's most trusted property advisory platform, helping you find
              the right home with trust & transparency.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="footer-social">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="footer-social">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="footer-social">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="footer-social">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <FooterColumn
            title="Company"
            links={[
              { name: "About Us", to: "/about" },
              { name: "Privacy Policy", to: "/privacy-policy" },
              { name: "Terms & Conditions", to: "/terms-and-conditions" },
            ]}
          />

          <FooterColumn
            title="Properties"
            links={[
              { name: "All Projects", to: "/projects" },
              { name: "Apartments", to: "#" },
              { name: "Villas", to: "#" },
              { name: "Plots", to: "#" },
              { name: "Commercial", to: "#" },
            ]}
          />

          <FooterColumn
            title="Locations"
            links={[
              { name: "Greater Noida", to: "/locations" },
              { name: "Noida", to: "/locations" },
              { name: "Yamuna Expressway", to: "/locations" },
              { name: "Gurugram", to: "/locations" },
              { name: "All Locations", to: "/locations" },
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              { name: "Blog", to: "/blog" },
              { name: "Market Insights", to: "#" },
              { name: "Guides", to: "#" },
              { name: "FAQs", to: "#" },
            ]}
          />

          {/* Contact Column */}
          <div className="col-12 col-lg-2">
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>9718 417 331</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>info@housera.co</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} className="align-self-start mt-1" />
              <span>
                Tower A, 7th Floor,
                <br /> Bhutani Alphathum, Sector-90, <br />
                Noida, Uttar Pradesh 201304
              </span>
            </div>
          </div>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Housera. All Rights Reserved. | Designed
          with ❤️ for NCR Home Buyers
        </div>
      </div>
    </footer>
  );
};

// Sub-component to keep code DRY (Don't Repeat Yourself)
const FooterColumn = ({ title, links }) => (
  <div className="col-6 col-md-3 col-lg-2">
    <div className="footer-col-title">{title}</div>
    {links.map((link, index) => (
      <Link key={index} to={link.to} className="footer-link">
        {link.name}
      </Link>
    ))}
  </div>
);

export default Footer;
