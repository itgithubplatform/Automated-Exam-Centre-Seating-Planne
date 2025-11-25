import HeroSection from './components/HeroSection';
import FeatureShowcase from './components/FeatureShowcase';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeatureShowcase />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </main>
  );
}