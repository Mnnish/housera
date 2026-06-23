import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section id="error-404" className="error-404 section">
      <Container data-aos="fade-up" data-aos-delay="100">
        <div className="error-wrapper">
          <Row className="align-items-center mt-5">
            {/* Left: Illustration */}
            <Col lg={6} data-aos="fade-right" data-aos-delay="200">
              <div className="error-illustration">
                <i className="bi bi-exclamation-triangle-fill"></i>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
            </Col>

            {/* Right: Content */}
            <Col lg={6} data-aos="fade-left" data-aos-delay="300">
              <div className="error-content mt-5">
                {/* <span className="error-badge" data-aos="zoom-in" data-aos-delay="400">Error</span> */}
                <h1
                  className="error-code"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  404
                </h1>
                <h2
                  className="error-title"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Page Not Found
                </h2>
                <p
                  className="error-description"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  The house or page you are looking for might have been moved,
                  had its name changed, or is temporarily unavailable.
                </p>

                <div
                  className="error-actions"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <Link to="/" className="btn-home text-decoration-none">
                    <i className="bi bi-house-door"></i> Back to Home
                  </Link>
                  <Link to="/contact" className="btn-help text-decoration-none">
                    <i className="bi bi-question-circle"></i> Help Center
                  </Link>
                </div>

                <div
                  className="error-suggestions"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <h3>You might want to:</h3>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/features" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle"></i> View all
                        properties
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle"></i> Contact
                        support
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none">
                        <i className="bi bi-arrow-right-circle"></i> Return to
                        previous page
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PageNotFound;
