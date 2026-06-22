import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock } from 'lucide-react';

const blogData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1561321698-40ae82a47b9e?auto=format&fit=crop&w=800&q=80",
    category: "MARKET UPDATE",
    title: "Greater Noida Property Prices Rise 18% in 2024",
    date: "May 15, 2024",
    readTime: "5 Min Read"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    category: "INFRASTRUCTURE",
    title: "Noida Metro Expansion: Impact on Real Estate",
    date: "May 10, 2024",
    readTime: "4 Min Read"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587745890135-20db8c79b027?auto=format&fit=crop&w=800&q=80",
    category: "INVESTMENT GUIDE",
    title: "Top 5 Investment Locations in NCR for High Returns",
    date: "May 07, 2024",
    readTime: "6 Min Read"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    category: "BUILDER NEWS",
    title: "New Launches in NCR You Shouldn't Miss",
    date: "May 03, 2024",
    readTime: "4 Min Read"
  }
];

const BlogSection = () => {
  return (
    <section className="py-5 slate-bg">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <div className="d-flex align-items-end justify-content-between mb-5">
          <div>
            <h2 className="navy-text fw-800 mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
              Market Insights & Blogs
            </h2>
            <p className="slate-text mb-0">Stay updated with the latest real estate trends</p>
          </div>
          <Link to="/blog" className="gold-text fw-700 d-none d-md-flex align-items-center gap-1" style={{ fontSize: '.875rem' }}>
            View All Articles <ChevronRight size={16} />
          </Link>
        </div>

        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="col">
              <article className="blog-card hover-lift">
                <div style={{ overflow: 'hidden' }}>
                  <img src={blog.image} alt={blog.title} className="img-fluid" />
                </div>
                <div className="p-4">
                  <div className="blog-cat mb-2">{blog.category}</div>
                  <h6 className="blog-title mb-3">{blog.title}</h6>
                  <div className="d-flex gap-3 blog-meta">
                    <span className="d-flex align-items-center">
                      <Calendar size={14} className="me-1" /> {blog.date}
                    </span>
                    <span className="d-flex align-items-center">
                      <Clock size={14} className="me-1" /> {blog.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;