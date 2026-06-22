import React from 'react';
import { ShieldCheck, Percent, FileCheck, Landmark, MapPin, UserCheck } from 'lucide-react';

const features = [
  { id: 1, icon: <ShieldCheck size={18} />, title: "Verified Listings", desc: "Only genuine and verified properties" },
  { id: 2, icon: <Percent size={18} />, title: "Best Price Guarantee", desc: "Get the best deals directly from builders" },
  { id: 3, icon: <FileCheck size={18} />, title: "Legal Verification", desc: "Complete documentation & legal assistance" },
  { id: 4, icon: <Landmark size={18} />, title: "Home Loan Support", desc: "Assistance with loans from top banks" },
  { id: 5, icon: <MapPin size={18} />, title: "Site Visit Support", desc: "Free guided site visits with experts" },
  { id: 6, icon: <UserCheck size={18} />, title: "Dedicated Advisor", desc: "Personal relationship manager for you" },

];

const WhyChooseUsSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="navy-text fw-800 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
            Why Choose Housera?
          </h2>
          <p className="slate-text">End-to-end support for a seamless home buying experience</p>
        </div>

        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6">
          {features.map((item) => (
            <div key={item.id} className="col">
              <div className="why-card">
                <div className="why-icon">{item.icon}</div>
                <div>
                  <div className="why-title">{item.title}</div>
                  <div className="why-desc">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;