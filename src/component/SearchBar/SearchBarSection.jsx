import React, { useState } from 'react';
import { MapPin, Home, Wallet, DoorOpen, ChevronDown, Search } from 'lucide-react';

const SearchBarSection = () => {
  const [dropdown, setDropdown] = useState({ loc: false, type: false, budget: false, bhk: false });
  const [values, setValues] = useState({ loc: 'Search location', type: 'Select type', budget: 'Select budget', bhk: 'Select BHK' });

  const toggle = (key) => setDropdown({ ...dropdown, [key]: !dropdown[key] });
  const pick = (key, val) => {
    setValues({ ...values, [key]: val });
    setDropdown({ ...dropdown, [key]: false });
  };

  const searches = [
    "Noida", 
    "Greater Noida West", 
    "Yamuna Expressway", 
    "Noida Expressway", 
    "Gurugram", 
    "Dholera Smart City", 
    "Luxury Villas"
  ];
  return (
    <section id="searchBar" className="py-4">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="search-panel">
          <div className="d-flex flex-column flex-lg-row align-items-stretch">
            
            {/* Location */}
            <SearchField label="Location" val={values.loc} icon={<MapPin size={18} />} isOpen={dropdown.loc} toggle={() => toggle('loc')}>
              {['Noida', 'Greater Noida', 'Greater Noida West', 'Yamuna Expressway', 'Noida Expressway', 'Gurugram', 'Dholera'].map(item => (
                <div key={item} className="sd-item" onClick={() => pick('loc', item)}>{item}</div>
              ))}
            </SearchField>
            
            <div className="search-divider"></div>

            {/* Property Type */}
            <SearchField label="Property Type" val={values.type} icon={<Home size={18} />} isOpen={dropdown.type} toggle={() => toggle('type')}>
              {['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse'].map(item => (
                <div key={item} className="sd-item" onClick={() => pick('type', item)}>{item}</div>
              ))}
            </SearchField>

            <div className="search-divider"></div>

            {/* Budget */}
            <SearchField label="Budget" val={values.budget} icon={<Wallet size={18} />} isOpen={dropdown.budget} toggle={() => toggle('budget')}>
              {['Under ₹50 Lakh', '₹50 Lakh - 1 Cr', '₹1 Cr - 2 Cr', '₹2 Cr - 5 Cr', 'Above ₹5 Cr'].map(item => (
                <div key={item} className="sd-item" onClick={() => pick('budget', item)}>{item}</div>
              ))}
            </SearchField>

            <div className="search-divider"></div>

            {/* BHK */}
            <SearchField label="BHK" val={values.bhk} icon={<DoorOpen size={18} />} isOpen={dropdown.bhk} toggle={() => toggle('bhk')}>
              {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'].map(item => (
                <div key={item} className="sd-item" onClick={() => pick('bhk', item)}>{item}</div>
              ))}
            </SearchField>

            <button className="search-btn d-flex align-items-center justify-content-center gap-2 ms-lg-2 mt-2 mt-lg-0">
              <Search size={18} /> Search
            </button>
          </div>
          
          
        </div>
        <div className="d-flex align-items-center gap-3 mt-4 overflow-auto pb-2" style={{ flexWrap: 'nowrap' }}>
      <span className="text-white fw-500 text-nowrap" style={{ fontSize: '.875rem' }}>
        Popular Searches:
      </span>
      
      <div className="d-flex gap-3" style={{ flexWrap: 'nowrap' }}>
        {searches.map((term, index) => (
          <button key={index} className="pop-search-tag">
            {term}
          </button>
        ))}
        
        {/* Special 'View All' tag */}
        <button className="pop-search-tag text-warning fw-700">
          View All ›
        </button>
      </div>
    </div>
      </div>
    </section>
  );
};

// Helper component for cleaner code
const SearchField = ({ label, val, icon, isOpen, toggle, children }) => (
  <div className="search-field position-relative" onClick={toggle}>
    <div className="sf-label">{label}</div>
    <div className="sf-val d-flex align-items-center gap-2">
      <span style={{ color: 'var(--navy)' }}>{icon}</span>
      <span>{val}</span>
      <ChevronDown size={16} className="ms-auto text-secondary" />
    </div>
    {isOpen && <div className="search-dropdown" style={{ display: 'block' }}>{children}</div>}
  </div>
);

export default SearchBarSection;