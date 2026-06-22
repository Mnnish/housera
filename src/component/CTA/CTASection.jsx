import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919718417331', '_blank');
  };

  return (
    <section className="py-4 bg-white">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="cta-inner">
          <div className="cta-bg-img"></div>
          <div className="cta-content">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-4">
              
              <div>
                <h2 className="cta-title">Looking For The Best Property Deal?</h2>
                <p className="cta-desc mb-0">
                  Get expert consultation, exclusive builder discounts, site visit assistance & end-to-end support.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="cta-btn-primary d-flex align-items-center gap-2"
                  onClick={() => console.log('Open Booking Modal')}
                >
                  <Calendar size={18} /> Schedule Free Consultation
                </button>
                
                <button 
                  className="cta-btn-whatsapp d-flex align-items-center gap-2"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;