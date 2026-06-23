import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PropertyDetails = () => {
  // 1. Gallery Logic - You can replace these with the Unsplash URLs I provided earlier
  const propertyImages = [
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Property Exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Living Room",
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      alt: "Kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80",
      alt: "Master Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Property Exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Living Room",
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      alt: "Kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80",
      alt: "Master Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Property Exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Living Room",
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      alt: "Kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80",
      alt: "Master Bedroom",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  // 2. Universal handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();

    // 4. Generate the payload
    const payload = {
      fullName: formData.name,
      contactPhone: formData.phone,
      contactEmail: formData.email,
      inquiryType: formData.interest || "General Inquiry",
      clientMessage: formData.message,
      requestDate: new Date().toLocaleString(),
      source: "Property Detail Page",
    };

    // Log payload for testing
    console.log("--- Generated Payload ---");
    console.log(JSON.stringify(payload, null, 2));

    // Logic to send to API would go here
    alert(`Payload generated for ${payload.fullName}. check console!`);

    // Optional: Clear form
    setFormData({ name: "", phone: "", email: "", interest: "", message: "" });
  };

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % propertyImages.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length,
    );
  return (
    <section id="property-details" className="property-details section">
      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4">
          {/* Left Side: Gallery, Description, Amenities, Map */}
          <Col lg={8}>
            {/* Property Gallery */}
            <div
              className="property-gallery"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="main-image-container">
                <img
                  src={propertyImages[currentIndex].src}
                  alt={propertyImages[currentIndex].alt}
                  className="img-fluid main-property-image"
                />
                <div className="image-nav-buttons">
                  <button
                    className="image-nav-btn prev-image"
                    onClick={handlePrev}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button
                    className="image-nav-btn next-image"
                    onClick={handleNext}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>

              <div className="thumbnail-gallery">
                {propertyImages.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail-item ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img src={img.src} alt={img.alt} className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div
              className="property-description"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>About This Property</h3>
              <p>
                Welcome to this stunning modern residence located in the heart
                of the city. This property offers a perfect blend of luxury and
                comfort...
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>

            {/* Amenities */}
            <div
              className="property-amenities"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>Amenities & Features</h3>
              <Row>
                <Col md={6}>
                  <h4>Interior Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="bi bi-check-circle"></i>Hardwood Floors
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>Updated Kitchen
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>Central Air
                      Conditioning
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h4>Exterior Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="bi bi-check-circle"></i>2-Car Garage
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>Swimming Pool
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>Security System
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>

            {/* Map */}
            <div
              className="property-map"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3>Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.463319409!2d-87.8720466367307!3d41.83364790075501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Property Map"
                ></iframe>
              </div>
            </div>
          </Col>

          {/* Right Side: Sticky Overview & Form */}
          <Col lg={4}>
            <div className="property-overview sticky-top">
              <div className="price-tag">$875,000</div>
              <div className="property-status">For Sale</div>

              <div className="property-address">
                <h4>1234 Maple Street</h4>
                <p>
                  {" "}
                  <i className="bi bi-geo-alt"> </i>Chicago, IL 60601
                </p>
              </div>

              {/* <div className="property-stats">

                 <StatItem icon="bi-house" value="4" label="Bedrooms" />
                <StatItem icon="bi-droplet" value="3" label="Bathrooms" />
                <StatItem icon="bi-rulers" value="2,450" label="Sq Ft" />
                <StatItem icon="bi-calendar" value="2018" label="Built" /> 
              </div> */}
              <div className="property-stats">
                <div className="stat-item">
                  <i className="bi bi-house"></i>
                  <div>
                    <span className="value">4</span>
                    <span className="label">Bedrooms</span>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="bi bi-droplet"></i>
                  <div>
                    <span className="value">3</span>
                    <span className="label">Bathrooms</span>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="bi bi-rulers"></i>
                  <div>
                    <span className="value">2,450</span>
                    <span className="label">Sq Ft</span>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="bi bi-tree"></i>
                  <div>
                    <span className="value">0.25</span>
                    <span className="label">Acre Lot</span>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="bi bi-calendar"></i>
                  <div>
                    <span className="value">2018</span>
                    <span className="label">Year Built</span>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="bi bi-car-front"></i>
                  <div>
                    <span className="value">2</span>
                    <span className="label">Garage</span>
                  </div>
                </div>
              </div>

              {/* Agent Info */}
              <div className="agent-info">
                <div className="agent-avatar">
                  <img
                    src="https://i.pravatar.cc/150?u=rachel"
                    alt="Sarah Johnson"
                    className="img-fluid"
                  />
                </div>
                <div className="agent-details">
                  <h4>Sarah Johnson</h4>
                  <p className="agent-title">Licensed Agent</p>
                  <p className="agent-phone">
                    <i className="bi bi-telephone"></i> +1 (555) 123-4567
                  </p>
                  <p className="agent-email">
                    <i className="bi bi-envelope"></i>sarah@example.com
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="contact-form">
                <h4>Schedule a Tour</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name" // Name must match state key
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Select
                    className="form-control mb-3"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">I'm interested in...</option>
                    <option value="Scheduling a viewing">
                      Scheduling a viewing
                    </option>
                    <option value="Getting more information">
                      Getting more information
                    </option>
                    <option value="Submitting an application">
                      Submitting an application
                    </option>
                  </Form.Select>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={3}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="py-2 btn btn-primary rounded-pill"
                  >
                    SCHEDULE TOUR
                  </Button>
                </Form>
              </div>

              {/* Share */}
              <div className="social-share mt-4">
                <h5>Share This Property</h5>
                <div className="share-buttons d-flex gap-2">
                  <a href="#" className="share-btn facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="share-btn twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="share-btn whatsapp">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Reusable Stat Component
// const StatItem = ({ icon, value, label }) => (
//   <div className="stat-item d-flex align-items-center mb-3">
//     <i className={`${icon} me-3 fs-4`}></i>
//     <div>
//       <div className="fw-bold">{value}</div>
//       <div className="small text-muted text-uppercase">{label}</div>
//     </div>
//   </div>
// );

export default PropertyDetails;
