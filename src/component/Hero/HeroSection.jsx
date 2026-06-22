import React from "react";
import {
  ShieldCheck,
  Search,
  Calendar,
  Home,
  Users,
  Building,
  MapPin,
  ArrowRight,
  Landmark,
} from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: <Home size={20} />, val: "10,000+", label: "Verified Properties" },
    { icon: <Users size={20} />, val: "5,000+", label: "Happy Home Buyers" },
    { icon: <Building size={20} />, val: "50+", label: "Builder Partners" },
    { icon: <MapPin size={20} />, val: "NCR", label: "Wide Coverage" },
  ];
  const stats2 = [
    { label: "Onwards", value: "₹ 95 Lakh", type: "primary" },
    { label: "Configurations", value: "3 & 4 BHK", icon: <Home size={14} /> },
    { label: "Possession", value: "Dec 2026", icon: <Calendar size={14} /> },
  ];

  const features = [
    {
      icon: <ShieldCheck size={14} className="text-success" />,
      label: "RERA Approved",
    },
    {
      icon: <Landmark size={14} className="text-primary" />,
      label: "Bank Loan",
    },
    {
      icon: <Users size={14} style={{ color: "#8b5cf6" }} />,
      label: "Amenities",
    },
  ];
  return (
    <section id="hero">
      <div className="container-fluid max-1400 px-4 px-lg-5 py-4">
        <div className="row align-items-center g-4">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-badge">
              <ShieldCheck size={18} className="text-warning" /> NCR's Most
              Trusted Property Advisory
            </div>
            <h1 className="hero-title mb-4">
              Find Your <span className="accent">Dream Home</span> in NCR
            </h1>
            <p className="hero-desc mb-5">
              Explore verified properties, luxury residences, investment
              opportunities, and exclusive builder deals — all in one place.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-5">
              <button className="hero-btn-primary d-flex align-items-center gap-2">
                <Search size={18} /> Explore Properties
              </button>
              <button className="hero-btn-outline d-flex align-items-center gap-2">
                <Calendar size={18} /> Book Free Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="row g-3">
              {stats.map((stat, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="hero-stat-icon">{stat.icon}</div>
                    <div>
                      <div className="hero-stat-val">{stat.val}</div>
                      <div className="hero-stat-label">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Featured Card */}
          <div className="col-lg-6 d-flex justify-content-lg-end">
            <div
              className="featured-card bg-white"
              style={{ maxWidth: "400px", width: "100%", position: "relative" }}
            >
              <div className="featured-badge">FEATURED</div>
              <img
                src="https://images.unsplash.com/photo-1561321698-40ae82a47b9e?auto=format&fit=crop&w=800&q=80"
                alt="ATS Homekraft"
                className="img-fluid"
              />
              <div className="p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3 ">
                  <div className="feat-logo-box">ATS</div>
                  <div>
                    <div className="fw-700 navy-text fs-5  fw-bolder">ATS Homekraft</div>
                    <p
                      className="d-flex align-items-center gap-1 mt-1 slate-text m-0"
                      style={{ fontSize: ".75rem" }}
                    >
                      <MapPin size={12} /> Sector 1, Greater Noida West
                    </p>
                  </div>
                </div>
                <div className="row g-2 py-3 border-top border-bottom mb-3">
                  {stats2.map((item, idx) => (
                    <div key={idx} className="col-4">
                      <div style={{ fontSize: ".6rem" }}
                        className={`fw-800 fs-5 lh-1 ${item.type === "primary" ? "gold-text" : "navy-text"} style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}`} 
                      >
                        {item.icon} {item.value}
                      </div>
                      <div
                        className="d-flex align-items-center gap-1 feat-stat-label"
                       
                      >
                         {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row g-2 mb-2">
                  {features.map((feat, index) => (
                    <div
                      key={index}
                      className="col-4 d-flex align-items-center gap-1"
                      style={{ fontSize: "11px", color: "#475569" }}
                    >
                      {feat.icon} {feat.label}
                    </div>
                  ))}
                </div>

                {/* ...Rest of the card content logic... */}
                <button className="prop-cta d-flex align-items-center justify-content-center gap-2 mt-2">
                  View Project Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
