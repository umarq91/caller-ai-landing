import { SocialProof } from "@/components/social-proof";
import { AnimatedSection } from "@/components/animated-section";
import AutomateCallsSection from "@/components/automate-calls-section";

import { HeroSection } from "@/components/home-section";
import { LargeTestimonial } from "@/components/large-terminal";
import FunkyFeaturesSection from "@/components/feature-section";
import { TestimonialGridSection } from "@/components/testimonials-grid-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import ExpandableCards from "@/components/expandable-cards";
import { VoiceSection } from "@/components/voices-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="w-full mx-auto relative">
          <HeroSection />
        </main>
        <AnimatedSection
          id="about-us"
          className="relative z-10 max-w-[1320px] mx-auto px-6"
          delay={0.1}
        >
          <AutomateCallsSection />
          <SocialProof />
        </AnimatedSection>

        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <LargeTestimonial />
        </AnimatedSection>

        <AnimatedSection
          id="features-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-16"
          delay={0.2}
        >
          <FunkyFeaturesSection />
        </AnimatedSection>

        <AnimatedSection
          id="voice-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <ExpandableCards />
          <div className="mt-10">
            <VoiceSection />
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection>

        <AnimatedSection
          id="faq-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection
          id="contact-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <ContactSection />
        </AnimatedSection>

        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <CTASection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  );
}
