import React from 'react';
import { MapPin, House, ShieldCheck, ArrowRight, ChevronRight } from 'lucide-react';

const properties = [
  { id: 1, name: "Godrej Tropical Isle", loc: "Sector 146, Noida Expressway", price: "₹2.35 Cr*", config: "3, 4 BHK", tag: "FEATURED", img: "https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "ATS Homekraft", loc: "Sector 1, Gr. Noida West", price: "₹95 Lakh*", config: "3, 4 BHK", tag: "NEW LAUNCH", img: "https://images.unsplash.com/photo-1561321698-40ae82a47b9e?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Ace Starlit", loc: "Sector 152, Noida Expressway", price: "₹1.65 Cr*", config: "3, 4 BHK", tag: "PREMIUM", img: "https://images.unsplash.com/photo-1623051786509-57224cdc43e1?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Mahagun Medalleo", loc: "Sector 107, Noida Expressway", price: "₹3.10 Cr*", config: "2, 3 BHK", tag: "LUXURY", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Gaur Yamuna City", loc: "Yamuna Expressway", price: "₹78 Lakh*", config: "Plots", tag: "INVESTOR PICK", img: "https://images.unsplash.com/photo-1597047084993-bf337e09ede0?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "CRC The Flagship", loc: "Sector 100A, Noida", price: "₹1.20 Cr*", config: "2, 3 BHK", tag: "NEW LAUNCH", img: "https://images.unsplash.com/photo-1565363887715-8884629e09ee?auto=format&fit=crop&w=800&q=80" },
];

const FeaturedPropertiesSection = () => {
  return (
    <section className=" py-5 slate-bg ">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="d-flex align-items-end justify-content-between mb-5">
          <div>
            <h2 className="navy-text fw-800 mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>Featured Properties</h2>
            <p className="slate-text mb-0">Handpicked premium projects for you</p>
          </div>
          <a href="/projects" className="gold-text fw-700 d-none d-md-flex align-items-center gap-1" style={{ fontSize: '.875rem' }}>
            View All Properties <ChevronRight size={16} />
          </a>
        </div>

        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
          {properties.map((prop) => (
            <div key={prop.id} className="col">
              <div className="prop-card hover-lift h-100">
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={prop.img} alt={prop.name} />
                  <span className="prop-tag">{prop.tag}</span>
                </div>
                <div className="p-4">
                  <h5 className="navy-text fw-700 mb-1">{prop.name}</h5>
                  <p className="slate-text d-flex align-items-center gap-1 mb-3" style={{ fontSize: '.75rem' }}>
                    <MapPin size={14} /> {prop.loc}
                  </p>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div>
                      <div className="prop-price">{prop.price}</div>
                      <div className="prop-price-sub">Onwards</div>
                    </div>
                    <span className="prop-config"><House size={14} className="me-1" /> {prop.config}</span>
                  </div>
                  <p className="prop-rera mb-3"><ShieldCheck size={14} className="me-1" /> RERA Approved</p>
                  <button className="prop-cta d-flex align-items-center justify-content-center gap-2">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;