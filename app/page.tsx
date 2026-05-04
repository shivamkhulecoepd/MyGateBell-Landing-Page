import { AppShowcaseSection } from '@/components/sections/app-showcase';
import { FeaturesSection } from '@/components/sections/features';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { RoleTabsSection } from '@/components/sections/role-tabs';
import { SecurityTrustSection } from '@/components/sections/security-trust';
import { SocialProofSection } from '@/components/sections/social-proof';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <RoleTabsSection />
        <AppShowcaseSection />
        <SecurityTrustSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
