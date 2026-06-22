import React from "react";
import {
  ArrowRight,
  Building,
  TrendingUp,
  Plane,
  Stars,
  MapPin,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Greater Noida West",
    metric: "18%",
    sub: "Annual Growth",
    badge: "Rental Demand",
    icon: <Building />,
    image:
      "https://images.unsplash.com/photo-1561321698-40ae82a47b9e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Noida Expressway",
    metric: "Excellent",
    sub: "Metro Connectivity",
    badge: "High Appreciation",
    icon: <TrendingUp />,
    image:
      "https://images.unsplash.com/photo-1623051786509-57224cdc43e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Yamuna Expressway",
    metric: "Airport Zone",
    sub: "Influence Zone",
    badge: "Infra Boost",
    icon: <Plane />,
    image:
      "https://images.unsplash.com/photo-1597047084993-bf337e09ede0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Dholera Smart City",
    metric: "Future",
    sub: "Growth Corridor",
    badge: "Smart City",
    icon: <Stars />,
    image:
      "https://images.unsplash.com/photo-1565363887715-8884629e09ee?auto=format&fit=crop&w=800&q=80",
  },
];

const InvestmentSection = () => {
  return (
    <section className="py-5 navy-bg">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="row g-4">
          {/* Header Column */}
          <div className="col-lg-3">
            <h2
              className="text-white fw-800 mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                lineHeight: "1.2",
              }}
            >
              Top Investment Destinations
            </h2>
            <p
              className="mb-4"
              style={{
                color: "rgba(255,255,255,.7)",
                fontSize: ".875rem",
                lineHeight: "1.7",
              }}
            >
              High growth corridors with excellent connectivity, infrastructure
              and future potential.
            </p>
            <button className="hero-btn-primary d-flex align-items-center gap-2">
              Explore Locations <ArrowRight size={18} />
            </button>
          </div>

          {/* Cards Column */}
          <div className="col-lg-6">
            <div className="row g-3">
              {destinations.map((dest) => (
                <div key={dest.id} className="col-6">
                  <div
                    className="dest-card"
                    style={{
                      backgroundImage: `linear-gradient(135deg,rgba(10,26,62,.65),rgba(10,26,62,.85)),url('${dest.image}')`,
                    }}
                  >
                    <div className="dest-overlay">
                      <div className="d-flex align-items-center gap-2 text-white">
                        <span className="text-warning">{dest.icon}</span>
                        <span style={{ fontSize: ".875rem", fontWeight: 600 }}>
                          {dest.title}
                        </span>
                      </div>
                      <div>
                        <div className="dest-metric">{dest.metric}</div>
                        <div className="dest-sub">{dest.sub}</div>
                        <span className="dest-badge">{dest.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Column */}
          <div className="col-lg-3">
            <div className="map-card h-100" style={{ minHeight: "300px" }}>
              {/* Map Pins */}
              {[20, 35, 55, 65, 40].map((top, i) => (
                <MapPin
                  key={i}
                  size={16}
                  className="map-pin"
                  style={{
                    top: `${top}%`,
                    left: `${[25, 55, 40, 70, 80][i]}%`,
                  }}
                />
              ))}
              <div
                className="text-center"
                style={{ color: "rgba(255,255,255,.3)" }}
              >
                <MapPin
                  size={40}
                  className="text-warning"
                  style={{ opacity: ".3" }}
                />
                <p style={{ fontSize: ".875rem", marginTop: ".5rem" }}>
                  NCR Map View
                </p>
              </div>
              <button className="map-cta d-flex align-items-center gap-2">
                View Full Map <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
