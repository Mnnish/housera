import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

function Contactus() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: "Housera Contact Form",
    };
    console.log("Generated Payload Data:", payload);
    
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for contacting us. We'll get back to you soon.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#0d6efd",
    });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    
  };

  return (
    <>
      <section id="contact" className="contact section light-background mb-5 ">
      
        <Container
          className="shadow-lg p-0 rounded-4 overflow-hidden "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Row className="g-0">
            <Col lg={6} data-aos="zoom-in" data-aos-delay="200">
              <div className="contact-info-panel">
                <div className="panel-content">
                  <div className="info-header">
                    <h2>Ready to Connect?</h2>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>

                  <div className="info-grid">
                    <div
                      className="info-card"
                      data-aos="slide-up"
                      data-aos-delay="250"
                    >
                      <div className="card-icon">
                        <i className="bi bi-house-door"></i>
                      </div>
                      <div className="card-content">
                        <h4>Visit Our Office</h4>
                        <p>
                          1247 Central Park West
                          <br />
                          New York, NY 10024
                        </p>
                      </div>
                    </div>

                    <div
                      className="info-card"
                      data-aos="slide-up"
                      data-aos-delay="300"
                    >
                      <div className="card-icon">
                        <i className="bi bi-chat-dots"></i>
                      </div>
                      <div className="card-content">
                        <h4>Send Us a Message</h4>
                        <p>contact@example.com</p>
                      </div>
                    </div>

                    <div
                      className="info-card"
                      data-aos="slide-up"
                      data-aos-delay="350"
                    >
                      <div className="card-icon">
                        <i className="bi bi-headset"></i>
                      </div>
                      <div className="card-content">
                        <h4>Call Us Directly</h4>
                        <p>+1 (555) 432-1098</p>
                      </div>
                    </div>

                    <div
                      className="info-card"
                      data-aos="slide-up"
                      data-aos-delay="400"
                    >
                      <div className="card-icon">
                        <i className="bi bi-calendar3"></i>
                      </div>
                      <div className="card-content">
                        <h4>Business Hours</h4>
                        <p>
                          Mon-Fri: 8AM-7PM
                          <br />
                          Weekends: By Appointment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="social-section"
                    data-aos="fade-in"
                    data-aos-delay="450"
                  >
                    <h5>Follow Our Journey</h5>
                    <div className="social-icons">
                      <a href="#" className="social-icon">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Panel: Contact Form */}
            <Col lg={6} data-aos="slide-left" data-aos-delay="300">
              <div className="contact-form-wrapper">
                <div className="form-header">
                  <h3>Drop Us a Line</h3>
                  <div className="header-line"></div>
                </div>

                <form className="modern-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Your message goes here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <span className="btn-text">Send Message</span>
                    <span className="btn-icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contactus;
