import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <>
      <div className="home-page">
        {/* --- Home About Section --- */}
        <section id="home-about" className="home-about section py-5">
          <Container data-aos="fade-up" data-aos-delay="100">
            <Row className="gy-5">
              {/* Left Column: Image Gallery */}
              <Col lg={5} data-aos="zoom-in" data-aos-delay="200">
                <div className="image-gallery">
                  <div className="primary-image">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Modern Property Exterior"
                      className="img-fluid"
                    />
                    <div className="experience-badge">
                      <div className="badge-content">
                        <div className="number">15+</div>
                        <div className="text">
                          Years
                          <br />
                          Experience
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="secondary-image">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Luxury Interior"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>

              {/* Right Column: Content */}
              <Col lg={7} data-aos="fade-left" data-aos-delay="300">
                <div className="content">
                  <div className="section-header">
                    <h2 className="fw-bold">
                      Building Dreams, Creating Homes Since 2008
                    </h2>
                  </div>
                  <p>
                    At <b style={{ color: "var(--navy)" }}>Housera</b>, we
                    simplify the way people discover, compare, and connect with
                    real estate opportunities. Whether you are searching for
                    your dream home, investment property, commercial space,
                    rental accommodation, or residential plots, Housera provides
                    a reliable platform to explore verified property listings
                    from trusted developers, owners, brokers, and real estate
                    professionals.
                  </p>{" "}
                  <p>
                    Our mission is to make property search transparent,
                    efficient, and accessible for everyone. We leverage
                    technology, market insights, and a user-friendly experience
                    to help buyers, sellers, tenants, landlords, and real estate
                    businesses connect seamlessly.
                  </p>
                  {/* <div className="achievements-list">
                    <div className="achievement-item">
                      <div className="achievement-icon">
                        <i className="bi bi-house-door"></i>
                      </div>
                      <div className="achievement-content">
                        <h4>3200+ Properties Sold</h4>
                        <p>
                          Successfully completed transactions across the country
                        </p>
                      </div>
                    </div>

                    <div className="achievement-item">
                      <div className="achievement-icon">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="achievement-content">
                        <h4>98% Client Satisfaction</h4>
                        <p>Our happy customers are our greatest achievement</p>
                      </div>
                    </div>
                  </div> */}
                  <div className="action-section">
                    <Link to="/about" className="btn-cta text-decoration-none">
                      <span>Discover Our Story</span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </Link>

                    <div className="contact-info">
                      <div className="contact-icon">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div className="contact-details">
                        <span>Call us today</span>
                        <strong>+1 (555) 123-4567</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="mission-vision" className="mission-vision">
          <Container data-aos="fade-up" data-aos-delay="100">
            {/* Detailed Showcase Section */}
            <Row className="mt-5 align-items-center">
              <Col lg={6} data-aos="fade-right" data-aos-delay="200">
                <div className="purpose-showcase">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Excellence"
                    className="img-fluid rounded-4 shadow-lg"
                  />
                </div>
              </Col>

              <Col lg={6} data-aos="fade-left" data-aos-delay="300">
                <div className="purpose-content ps-lg-4">
                  <h3>What We Offer</h3>
                  {/* <p className="lead">
                    We don't just list properties; we build the future of real
                    estate through three key pillars.
                  </p> */}

                  <div className="purpose-list">
                    <div className="list-item">
                      <div className="item-icon">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div className="item-text">
                        <h5>Property Listings </h5>
                        <p>
                          Browse a wide range of residential and commercial
                          properties, including: Apartments, Villas, Residential
                          Plots, Commercial Shops, Office Spaces, Retail Spaces
                          Rental Properties, Co-living & PG Accommodations.
                        </p>
                      </div>
                    </div>

                    <div className="list-item">
                      <div className="item-icon">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div className="item-text">
                        <h5>Property Discovery</h5>
                        <p>
                          Find properties based on: Location Budget Property
                          Type Amenities Investment Potential
                        </p>
                      </div>
                    </div>

                    <div className="list-item">
                      <div className="item-icon">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div className="item-text">
                        <h5>Lead Generation</h5>
                        <p>
                          We help property owners, developers, and agents
                          connect with genuine buyers and tenants.
                        </p>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="item-icon">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div className="item-text">
                        <h5>Market Insights</h5>
                        <p>
                          Stay informed with property trends, project updates,
                          locality information, and real estate investment
                          opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 
              <div className="action-buttons">
                <a href="/contact" className="btn btn-primary-custom">Get Started</a>
                <a href="/features" className="btn btn-outline-custom">Explore Features</a>
              </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default AboutHero;
