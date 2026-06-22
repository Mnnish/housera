import React from "react";
import FAQSection from "./FAQ's/FAQSection";
import CTASection from "./CTA/CTASection";
import BlogSection from "./Blog/BlogSection";
import TrustedDevelopersSection from "./TrustedDevelopers/TrustedDevelopersSection";
import FeaturedPropertiesSection from "./FeaturedProperties/FeaturedPropertiesSection";
import InvestmentSection from "./Investment/InvestmentSection";
import WhyChooseUsSection from "./WhyChooseUs/WhyChooseUsSection";
import CategorySection from "./Category/CategorySection";
import { TestTube } from "lucide-react";
import ProcessSection from "./Process/ProcessSection";
import TestimonialSection from "./Testimonial/TestimonialSection";
import HeroSection from "./Hero/HeroSection";
import SearchBarSection from "./SearchBar/SearchBarSection";

function Index() {
  return (
    <>
      <HeroSection />
      <SearchBarSection />
      <TrustedDevelopersSection />
      <FeaturedPropertiesSection />
      <InvestmentSection />
      <WhyChooseUsSection />
      <CategorySection />
      <ProcessSection />
      <TestimonialSection />
      <BlogSection />
      <CTASection />
      <FAQSection />
    </>
  );
}

export default Index;
