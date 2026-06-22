import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <section id="terms-of-service" className="terms-of-service section py-5">
      <Container data-aos="fade-up">
        {/* Page Header */}
        <div
          className="tos-header section-title text-center"
          data-aos="fade-up"
        >
          <span className="last-updated  shadow-sm">
            Last Updated: June 22, 2026
          </span>
          <h2 className="fw-bold">Terms of Service</h2>
          <p>
            Welcome to Housera. By accessing or using our website, you agree to
            comply with these Terms & Conditions.
          </p>
        </div>

        {/* Content Section */}
        <div className="tos-content" data-aos="fade-up" data-aos-delay="200">
          {/* 1. Acceptance of Terms*/}
          <div id="agreement" className="content-section">
            <h3 className="fw-bold">1. Acceptance of Terms</h3>
            <p>
              By accessing Housera, you acknowledge that you have read,
              understood, and agreed to these Terms & Conditions.
            </p>
            {/* <div className="info-box">
              <i className="bi bi-info-circle me-3"></i>
              <p className="mb-0">
                These terms apply to all users, property seekers, and agents who
                use our services.
              </p>
            </div> */}
          </div>

          {/* 2. Platform Nature
           */}
          <div id="platform-nature" className="content-section">
            <h3 className="fw-bold">2. Platform Nature</h3>
            <p>
              Housera is an online property listing and lead generation platform
              that connects property seekers with property owners, developers,
              brokers, and agents.
            </p>
            <div className="info-box">
              <i className="bi bi-info-circle me-3"></i>
              <p className="mb-0">
                Housera does not own, sell, purchase, lease, or broker
                properties unless explicitly stated.
              </p>
            </div>
          </div>

          {/* 3. User Accounts */}
          <div
            id="user-accounts"
            className="content-section"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <h3 className="fw-bold">3. User Accounts</h3>
            <p>
              Users may be required to create an account to access certain
              features.
            </p>
            <div className="disclaimer-box shadow-sm p-4 rounded-4 bg-white">
              <p className="fw-bold mb-3 text-dark">You agree to:</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"> Provide accurate information</li>
                <li className="mb-2"> Maintain account security</li>
                <li className="mb-2"> Keep login credentials confidential</li>
                <li className="mb-2">
                  {" "}
                  Notify us of unauthorized account access
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Property Listings */}
          <div id="property-listings" className="content-section">
            <h3 className="fw-bold">4. Property Listings</h3>
            <p>
              Property owners, agents, and developers are responsible for the
              accuracy of information submitted on the platform.
            </p>
            <div className="prohibited-list">
              <div className="prohibited-item shadow-sm">
                <i className="bi bi-x-circle me-2"></i>
                <span>Property availability</span>
              </div>
              <div className="prohibited-item shadow-sm">
                <i className="bi bi-x-circle me-2"></i>
                <span>Pricing accuracy</span>
              </div>
              <div className="prohibited-item shadow-sm">
                <i className="bi bi-x-circle me-2"></i>
                <span>Ownership authenticity</span>
              </div>
              <div className="prohibited-item shadow-sm">
                <i className="bi bi-x-circle me-2"></i>
                <span>Legal compliance of listings</span>
              </div>
            </div>
          </div>
          {/* 5. User Responsibilities*/}
          <div
            id="user-responsibilities"
            className="content-section"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <h3 className="fw-bold">5. User Responsibilities</h3>
            <p>
              Users may be required to create an account to access certain
              features.
            </p>
            <div className="disclaimer-box shadow-sm p-4 rounded-4 bg-white">
              <p className="fw-bold mb-3 text-dark">You agree to:</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"> Post false or misleading information</li>
                <li className="mb-2"> Violate any applicable laws</li>
                <li className="mb-2"> Upload harmful content or malware</li>
                <li className="mb-2">
                  {" "}
                  Use the platform for fraudulent activities
                </li>
                <li className="mb-2"> Interfere with website functionality</li>
              </ul>
            </div>
          </div>

          {/* 5. Disclaimers */}
          <div
            id="disclaimer"
            className="content-section"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <h3 className="fw-bold">5. Disclaimers</h3>
            <p>
              Your use of our service is at your sole risk. The service is
              provided "AS IS" and "AS AVAILABLE" without warranties of any
              kind, whether express or implied.
            </p>
            <div className="disclaimer-box shadow-sm p-4 rounded-4 bg-white">
              <p className="fw-bold mb-3 text-dark">
                We do not guarantee that:
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  {" "}
                  The service will meet your specific property requirements
                </li>
                <li className="mb-2">
                  {" "}
                  The service will be uninterrupted or error-free
                </li>
                <li className="mb-2">
                  {" "}
                  Results from using the service will be 100% accurate
                </li>
                <li className="mb-2">
                  {" "}
                  Technical errors will be corrected immediately
                </li>
              </ul>
            </div>
          </div>
          {/* 6. Intellectual Property */}
          <div id="intellectual-property" className="content-section">
            <h3 className="fw-bold">6. Intellectual Property Rights</h3>
            <p>
              Housera's content, features, and functionality (including the
              Housera name and logo) are protected by intellectual property laws
              and may not be copied, reproduced, or distributed without written
              permission.
            </p>
            <ul className="list-items list-unstyled ps-0">
              <li> Logo</li>
              <li> Branding</li>
              <li>Website Design</li>
              <li>Text</li>
              <li>Images</li>
              <li>Graphics</li>
            </ul>
          </div>

          {/* 7. Limitation of Liability */}
          <div
            id="limitation"
            className="content-section"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="fw-bold">7. Limitation of Liability</h3>
            <p>
              Users assume full responsibility for property transactions
              conducted through contacts generated via the platform.
            </p>
            <div className="disclaimer-box shadow-sm p-4 rounded-4 bg-white">
              <p className="fw-bold mb-3 text-dark">
                Housera shall not be liable for:
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"> Property disputes</li>
                <li className="mb-2"> Transaction failures</li>
                <li className="mb-2"> Financial losses</li>
                <li className="mb-2"> Inaccurate listing information</li>
                <li className="mb-2"> Third-party actions</li>
                <li className="mb-2"> Website downtime or interruptions</li>
              </ul>
            </div>
          </div>

          {/* 8. Thirds Party Service  */}
          <div id="third-party-services" className="content-section">
            <h3 className="fw-bold">8. Third-Party Services</h3>
            <p>
              Housera may integrate with third-party services, including: Use of
              such services is subject to their respective terms and policies.
            </p>
            <ul className="list-items list-unstyled ps-0">
              <li> Payment Gateways</li>
              <li> Analytics Tools</li>
              <li>Marketing Platforms</li>
              <li>Communication Services</li>
            </ul>
          </div>

          {/* 9. Termination */}
          <div
            id="termination"
            className="content-section"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="fw-bold">9. Termination</h3>
            <p>
              We reserve the right to suspend or terminate user accounts that
              violate these Terms & Conditions.
            </p>
          </div>
          {/* 10. Indemnification */}
          <div
            id="indemnification"
            className="content-section"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <h3 className="fw-bold">10. Indemnification</h3>
            <p>
              Users agree to indemnify and hold Housera harmless from any
              claims, damages, liabilities, losses, or expenses arising from
              misuse of the platform.{" "}
            </p>
          </div>

          {/* 11. Governing Law */}
          <div
            id="governing-law"
            className="content-section"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <h3 className="fw-bold">11. Governing Law</h3>
            <p>
              These Terms shall be governed by and interpreted in accordance
              with the laws of India.
              <br />
              Any disputes shall be subject to the jurisdiction of courts
              located in Delhi/NCR, India.
            </p>
          </div>

          {/* 12. Changes to Terms */}
          <div
            id="changes"
            className="content-section mb-0"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h3 className="fw-bold">12. Changes to Terms</h3>
            <p>
              Housera may revise these Terms & Conditions at any time. Continued
              use of the platform constitutes acceptance of updated terms.
            </p>
            <div className="notice-box d-flex align-items-center p-4 rounded-4 mt-3">
              <i className="bi bi-bell fs-3 me-3"></i>
              <p className="mb-0 small">
                By continuing to access or use our service after revisions
                become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div
          className="tos-contact mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="contact-box shadow">
            <a href="mailto:support@housera.co" className="contact-link">
              <div className="contact-icon shadow">
                <i className="bi bi-envelope"></i>
              </div>
            </a>
            <div className="contact-content">
              <h4 className="fw-bold">Questions About Terms?</h4>
              <p>
                If you have any questions about these property listing terms,
                please contact our legal team.
              </p>
              <Link to="/contact-us" className="contact-link text-decoration-none">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Terms;
