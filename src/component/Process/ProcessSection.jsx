import React from 'react';
import { MessageSquareText, MapPin, CheckSquare, FileText, BookmarkCheck, Key } from 'lucide-react';

const processSteps = [
  { id: "01", icon: <MessageSquareText size={32} />, title: "Consultation", desc: "Share your requirements with us" },
  { id: "02", icon: <MapPin size={32} />, title: "Site Visit", desc: "Visit properties with our experts" },
  { id: "03", icon: <CheckSquare size={32} />, title: "Property Selection", desc: "Choose the right property" },
  { id: "04", icon: <FileText size={32} />, title: "Loan & Legal Check", desc: "We handle loan & legal verification" },
  { id: "05", icon: <BookmarkCheck size={32} />, title: "Booking", desc: "Easy booking with best deals" },
  { id: "06", icon: <Key size={32} />, title: "Possession", desc: "Hassle-free possession support" },
];

const ProcessSection = () => {
  return (
    <section className="py-5 slate-bg">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="navy-text fw-800 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
            Home Buying Process
          </h2>
          <p className="slate-text">Simple steps to your dream home</p>
        </div>

        <div className="position-relative">
          <div className="process-connector d-none d-lg-block"></div>
          <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-6 position-relative">
            {processSteps.map((step) => (
              <div key={step.id} className="col">
                <div className="proc-step">
                  <div className="proc-num">{step.id}</div>
                  <div className="proc-icon">{step.icon}</div>
                  <div className="proc-title">{step.title}</div>
                  <div className="proc-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;