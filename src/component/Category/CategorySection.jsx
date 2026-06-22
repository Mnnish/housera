import React from 'react';
import { Building2, Home, Map, Briefcase, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Apartments",
    desc: "Explore Premium Apartment Living",
    image: "https://images.unsplash.com/photo-1561321698-40ae82a47b9e?auto=format&fit=crop&w=800&q=80",
    icon: <Building2 size={32} />
  },
  {
    id: 2,
    title: "Villas",
    desc: "Luxury Villas for Elegant Living",
    image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=800&q=80",
    icon: <Home size={32} />
  },
  {
    id: 3,
    title: "Plots",
    desc: "Invest in Prime Land & Plots",
    image: "https://images.unsplash.com/photo-1587745890135-20db8c79b027?auto=format&fit=crop&w=800&q=80",
    icon: <Map size={32} />
  },
  {
    id: 4,
    title: "Commercial",
    desc: "Office Spaces & Commercial Hubs",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    icon: <Briefcase size={32} />
  }
];

const CategorySection = () => {
  return (
    <section className="pb-5 bg-white">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="navy-text fw-800" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
            Explore Property Categories
          </h2>
        </div>
        
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {categories.map((cat) => (
            <div key={cat.id} className="col">
              <div className="cat-card" style={{ backgroundImage: `url('${cat.image}')` }}>
                <div className="cat-overlay">
                  <div className="cat-icon">{cat.icon}</div>
                  <div className="cat-title">{cat.title}</div>
                  <div className="cat-desc">{cat.desc}</div>
                </div>
                <button className="cat-arrow">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;