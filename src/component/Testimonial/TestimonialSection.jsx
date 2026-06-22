import React from 'react';
import { Play, Star } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    name: "Amit Sharma",
    avatar: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?auto=format&fit=crop&w=200&q=80",
    purchase: "Purchased 3BHK at",
    project: "ATS Homekraft, Gr. Noida West",
    quote: "Housera helped me save ₹2.5 lakh and made the entire process smooth and transparent."
  },
  {
    id: 2,
    name: "Neha Verma",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    purchase: "Purchased 2BHK at",
    project: "Ace Starlit, Noida Expressway",
    quote: "From site visits to loan approval, their team was with me at every step."
  },
  {
    id: 3,
    name: "Rahul Malhotra",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    purchase: "Purchased Villa at",
    project: "Gaur Yamuna City",
    quote: "Professional, supportive and very knowledgeable team. Highly recommend!"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="navy-text fw-800 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
            Real Stories. Real Homeowners.
          </h2>
          <p className="slate-text">Turning dreams into addresses</p>
        </div>

        <div className="row g-4">
          {testimonialData.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="testi-card p-4">
                <div className="d-flex gap-3">
                  <div className="position-relative" style={{ flexShrink: 0 }}>
                    <img src={item.avatar} className="testi-avatar" alt={item.name} />
                    <div className="testi-play-wrap">
                      <div className="testi-play-btn"><Play size={16} className="navy-text" fill="currentColor" /></div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-name">{item.name}</div>
                    <div className="testi-purchase">{item.purchase}</div>
                    <div className="testi-project">{item.project}</div>
                    <div className="d-flex gap-1 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="text-warning" fill="currentColor" />
                      ))}
                    </div>
                    <p className="testi-quote mb-0">"{item.quote}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;