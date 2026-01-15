import { DownsellTimerBar } from '@/components/downsell/DownsellTimerBar';
import { DownsellHero } from '@/components/downsell/DownsellHero';
import { DownsellValueSummary } from '@/components/downsell/DownsellValueSummary';
import { DownsellUrgency } from '@/components/downsell/DownsellUrgency';
import { DownsellHotmartWidget } from '@/components/downsell/DownsellHotmartWidget';
import { DownsellGuarantee } from '@/components/downsell/DownsellGuarantee';
import { DownsellRejectLink } from '@/components/downsell/DownsellRejectLink';

const Downsell = () => {
  return (
    <div className="min-h-screen">
      <DownsellTimerBar />
      
      <div className="container max-w-4xl">
        <DownsellHero />
        <DownsellValueSummary />
        <DownsellUrgency />
        <DownsellHotmartWidget />
        <DownsellGuarantee />
        <DownsellRejectLink />
      </div>
    </div>
  );
};

export default Downsell;
