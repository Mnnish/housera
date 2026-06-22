import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="privacy section py-5">
      <Container data-aos="fade-up" data-aos-delay="100">
        <div className="section-title text-center" data-aos="fade-up">
          <h2 className="fw-bold">Privacy Policy</h2>
          <p>
            Please read these terms of service carefully before using our real
            estate services.
          </p>
        </div>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="privacy-content">
              {/* Last Updated */}
              <div
                className="last-updated shadow-sm mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>
                  <strong>Last updated:</strong> June 22 2026
                </p>
              </div>

              {/* Section: Information We Collect */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Information We Collect</h3>
                <p>
                  At Housera, we value your privacy. We collect information to
                  provide a better property search experience for you.
                </p>

                <h4 className="mb-3">Personal Information</h4>
                <ul className="list-unstyled ps-0">
                  <li className="mb-2">
                    <i className="bi bi-check2-circle text-primary me-2"></i>{" "}
                    Name, Email Address, Phone Number, and Location
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check2-circle text-primary me-2"></i>{" "}
                    Property preferences and saved search history
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check2-circle text-primary me-2"></i>{" "}
                    Identity verification documents for agents and sellers
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check2-circle text-primary me-2"></i>{" "}
                    Business Information (for agents, brokers, and developers)
                  </li>
                </ul>

                <h4 className="mt-4 mb-3">Non-Personal Information</h4>
                <p className="text-muted">
                  We may automatically collect the following to improve your
                  experience:
                </p>
                <ul className="list-unstyled ps-0">
                  <li className="mb-2">
                    <i className="bi bi-info-circle text-secondary me-2"></i> IP
                    Address and Browser Type
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-info-circle text-secondary me-2"></i>{" "}
                    Device Information and Website Usage Data
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-info-circle text-secondary me-2"></i>{" "}
                    Cookies and Tracking Data
                  </li>
                </ul>
              </div>

              {/* Section: How We Use Information */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>How We Use Your Information</h3>
                <p>
                  We use the collected data to maintain our service and notify
                  you about changes to our property platform.
                </p>

                <div className="info-box shadow-sm">
                  <h4>We use your information to:</h4>
                  <ol>
                    <li>Provide property search and listing services</li>
                    <li>
                      Connect buyers, sellers, tenants, landlords, and agents
                    </li>
                    <li>Respond to inquiries and customer support requests</li>
                    <li>Improve website functionality and user experience</li>
                    <li>
                      Send updates, promotional offers, and property
                      recommendations
                    </li>
                    <li>Prevent fraud and unauthorized activities</li>
                    <li>Comply with legal obligations</li>
                  </ol>
                </div>
              </div>

              {/* Section: Highighted Security Banner */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div
                  className="highlight-box shadow"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <i className="bi bi-shield-check"></i>
                  <h4>We Never Sell Your Data</h4>
                  <p>
                    Housera does not trade or sell your personal information to
                    third-party marketing companies.
                  </p>
                </div>
              </div>
              {/* Section: Cookie & Table */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                <h3>Cookies and Tracking</h3>
                <div className="cookie-types mt-4">
                  <div className="table-responsive shadow-sm rounded-3 overflow-hidden">
                    <Table className="table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Cookie Type</th>
                          <th>Purpose</th>
                          <th>Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Essential</td>
                          <td>Login security and session management</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td>Performance</td>
                          <td>Improve website performance and speed</td>
                          <td>Session / 1 Year</td>
                        </tr>
                        <tr>
                          <td>Preferences</td>
                          <td>Remember your search and language preferences</td>
                          <td>1 Year</td>
                        </tr>
                        <tr>
                          <td>Analytics</td>
                          <td>Analyze traffic and user behavior patterns</td>
                          <td>2 Years</td>
                        </tr>
                        <tr>
                          <td>Marketing</td>
                          <td>Provide personalized property recommendations</td>
                          <td>Persistent</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>

              {/* Section: Data Security */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <h3>Data Security</h3>
                <p>
                  We implement industry-standard security measures to protect
                  your property and personal data.
                </p>

                <div className="security-measures mt-4">
                  <Row className="g-4">
                    <Col md={6} data-aos="fade-right" data-aos-delay="800">
                      <div className="measure-item shadow-sm h-100">
                        <i className="bi bi-lock-fill"></i>
                        <h5>Encryption</h5>
                        <p>
                          All sensitive data is encrypted using SSL/TLS
                          protocols during transmission.
                        </p>
                      </div>
                    </Col>
                    <Col md={6} data-aos="fade-left" data-aos-delay="900">
                      <div className="measure-item shadow-sm h-100">
                        <i className="bi bi-server"></i>
                        <h5>Secure Storage</h5>
                        <p>
                          Your information is stored in highly secure,
                          firewalled data centers.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Section: Third-Party Links */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for their privacy practices or content.
                </p>
              </div>

              {/* Section: Your Rights */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>User Rights</h3>

                <div className="info-box shadow-sm">
                  <h4>You may:</h4>
                  <ol>
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your account and data</li>
                    <li>Opt out of marketing communications</li>
                  </ol>
                </div>
              </div>

              {/* Section:  Children's Privacy
               */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3> Children's Privacy</h3>
                <p>
                  Housera is not intended for users under the age of 18. We do
                  not knowingly collect information from minors.
                </p>
              </div>

              {/* Section: Changes to Privacy Policy */}
              <div
                className="privacy-section"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Changes to Privacy Policy</h3>
                <p>
                  We reserve the right to modify this Privacy Policy at any
                  time. Changes will be posted on this page with an updated
                  revision date.
                </p>
              </div>

              {/* Section: Contact */}
              <div
                className="contact-section mt-5 shadow-sm rounded-4"
                data-aos="fade-up"
                data-aos-delay="1300"
              >
                <h3 className="fw-bold">Contact Us</h3>
                <p>
                  If you have concerns regarding your privacy at Housera, please
                  reach out:
                </p>
                <div className="contact-info mt-4">
                  <div className="contact-item ">
                    <i className="bi bi-envelope me-2"></i>
                    <span>privacy@housera.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-geo-alt me-2"></i>
                    <span>1234 Privacy Street,Adyal Real State, IN 441903</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>+91 (770) 944-2885</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
