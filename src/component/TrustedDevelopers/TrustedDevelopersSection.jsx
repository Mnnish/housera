import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const developers = [
  { name: "ATS", color: "#dc2626" },
  { name: "GODREJ", color: "#db2777" },
  { name: "ACE", color: "#ef4444" },
  { name: "CRC", color: "#1d4ed8" },
  { name: "MAHAGUN", color: "#0891b2" },
  { name: "GAURS", color: "#15803d" },
  { name: "ELDECO", color: "#059669" },
  { name: "SAYA", color: "#d97706" },
  
];

const TrustedDevelopersSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-4 bg-white">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="dev-section">
          <h3 className="text-center navy-text fw-700 mb-4 fw-bolder" style={{ fontSize: "1.05rem" }}>
            Trusted By Leading Developers
          </h3>

          <div className="d-flex align-items-center gap-3">
            {/* Left Button */}
            <button className="dev-nav-btn" onClick={() => scroll("left")}>
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollRef}
              className="d-flex align-items-center gap-4 flex-nowrap overflow-hidden" 
              style={{ scrollBehavior: 'smooth' }}
            >
              {developers.map((dev, index) => (
                <div key={index} className="flex-shrink-0" style={{ minWidth: '120px' }}>
                  <span className="dev-logo d-block text-center" style={{ color: dev.color, fontWeight: 'bold' }}>
                    {dev.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button className="dev-nav-btn" onClick={() => scroll("right")}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedDevelopersSection;