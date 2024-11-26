import { LandingHero } from '@/components/landing/hero';
import { LandingFeatures } from '@/components/landing/features';
import { LandingPricing } from '@/components/landing/pricing';
import { LandingTestimonials } from '@/components/landing/testimonials';
import { LandingCTA } from '@/components/landing/cta';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <LandingHero />
        <LandingFeatures />
        <LandingTestimonials />
        <LandingPricing />
        <LandingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}