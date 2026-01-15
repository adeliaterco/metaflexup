import { TimerBar } from '@/components/upsell/TimerBar';
import { FloatingBadge } from '@/components/upsell/FloatingBadge';
import { HeroSection } from '@/components/upsell/HeroSection';
import { ProblemSolutionSection } from '@/components/upsell/ProblemSolutionSection';
import { ValueStackSection } from '@/components/upsell/ValueStackSection';
import { TestimonialsSection } from '@/components/upsell/TestimonialsSection';
import { UrgencySection } from '@/components/upsell/UrgencySection';
import { GuaranteeSection } from '@/components/upsell/GuaranteeSection';
import { HotmartWidget } from '@/components/upsell/HotmartWidget';
import { ComparisonSection } from '@/components/upsell/ComparisonSection';
import { FinalCTASection } from '@/components/upsell/FinalCTASection';
import { RejectLink } from '@/components/upsell/RejectLink';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TimerBar />
      <FloatingBadge />
      
      <div className="container max-w-6xl">
        <HeroSection />
        <ProblemSolutionSection />
        <ValueStackSection />
        <TestimonialsSection />
        <UrgencySection />
        <GuaranteeSection />
        <HotmartWidget />
        <ComparisonSection />
        <FinalCTASection />
        <RejectLink />
      </div>
    </div>
  );
};

export default Index;
