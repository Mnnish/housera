import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How do I schedule a site visit?",
    answer:
      "Simply click on Book Free Consultation or call us at 9718 417 331. Our advisor will arrange a free guided site visit at your preferred time.",
  },
  {
    id: 2,
    question: "Are your properties verified?",
    answer:
      "Yes, every property listed on Housera is RERA-approved and thoroughly verified by our legal and on-ground teams.",
  },
  {
    id: 3,
    question: "Is Housera free for home buyers?",
    answer:
      "Absolutely. Our advisory services are 100% free for buyers as we partner directly with developers.",
  },
  {
    id: 4,
    question: "Can I get the best price through Housera?",
    answer:
      "Yes, we have direct builder tie-ups ensuring you get exclusive discounts and the best price guarantee.",
  },
  {
    id: 5,
    question: "Do you provide home loan assistance?",
    answer:
      "We partner with leading banks like HDFC, SBI, ICICI and more to offer easy home loan processing with attractive rates.",
  },
  {
    id: 6,
    question: "What documents are required to book a property?",
    answer:
      "Typically you need PAN, [Government ID Redacted], address proof, income documents and passport-size photos. We assist with end-to-end documentation.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section py-5 bg-white">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="d-flex align-items-end justify-content-between mb-5">
          <h2
            className="navy-text fw-800 mb-0"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}
          >
            Frequently Asked Questions
          </h2>
          <a
            href="/faqs"
            className="gold-text fw-700 d-none d-md-flex align-items-center gap-1"
            style={{ fontSize: ".875rem" }}
          >
            View All FAQs <ChevronRight size={16} />
          </a>
        </div>

        <div className="row g-0 g-lg-5">
          {/* We map through the data to create columns dynamically */}
          <div className="col-lg-6">
            {faqData.slice(0, 3).map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={activeIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
          <div className="col-lg-6">
            {faqData.slice(3, 6).map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={activeIndex === index + 3}
                onClick={() => toggleFaq(index + 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ item, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? "active" : ""}`}>
    <button className="faq-btn" onClick={onClick}>
      <span className="faq-num">{item.id > 3 ? item.id - 3 : item.id}</span>
      <span className="faq-q">{item.question}</span>
      <ChevronDown size={20} className={`faq-icon ${isOpen ? "rotate" : ""}`} />
    </button>
    <div className={`faq-answer ${isOpen ? "show" : ""}`}>{item.answer}</div>
  </div>
);

export default FAQSection;
