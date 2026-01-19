import { AnimatedSection } from "@/components/animated-section";
import { HeroSection } from "@/components/home-section";
import dynamic from "next/dynamic";

// Dynamic imports for ALL components below hero to reduce initial bundle size and improve LCP
const AutomateCallsSection = dynamic(
  () => import("@/components/automate-calls-section"),
  { ssr: true },
);
const SocialProof = dynamic(
  () =>
    import("@/components/social-proof").then((mod) => ({
      default: mod.SocialProof,
    })),
  { ssr: true },
);
const LargeTestimonial = dynamic(
  () =>
    import("@/components/large-terminal").then((mod) => ({
      default: mod.LargeTestimonial,
    })),
  { ssr: true },
);
const FunkyFeaturesSection = dynamic(
  () => import("@/components/feature-section"),
  { ssr: true },
);
const TestimonialGridSection = dynamic(
  () =>
    import("@/components/testimonials-grid-section").then((mod) => ({
      default: mod.TestimonialGridSection,
    })),
  { ssr: true },
);
const FAQSection = dynamic(
  () =>
    import("@/components/faq-section").then((mod) => ({
      default: mod.FAQSection,
    })),
  { ssr: true },
);
const ContactSection = dynamic(
  () =>
    import("@/components/contact-section").then((mod) => ({
      default: mod.ContactSection,
    })),
  { ssr: true },
);
const CTASection = dynamic(
  () =>
    import("@/components/cta-section").then((mod) => ({
      default: mod.CTASection,
    })),
  { ssr: true },
);
const FooterSection = dynamic(
  () =>
    import("@/components/footer-section").then((mod) => ({
      default: mod.FooterSection,
    })),
  { ssr: true },
);
const ExpandableCards = dynamic(() => import("@/components/expandable-cards"), {
  ssr: true,
});
const VoiceSection = dynamic(
  () =>
    import("@/components/voices-section").then((mod) => ({
      default: mod.VoiceSection,
    })),
  { ssr: true },
);

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
