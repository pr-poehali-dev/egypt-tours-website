import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToursSection from "@/components/ToursSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ToursSection />
      <AboutSection />
      <ReviewsSection />
      <HowToOrderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
