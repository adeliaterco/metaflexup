import { useCountdownTimer } from '@/hooks/useCountdownTimer';

export const DownsellTimerBar = () => {
  const { formatted } = useCountdownTimer(10); // 10 minutos - mais urgente

  return (
    <div className="sticky top-0 z-50 bg-destructive py-4 px-5 text-center">
      <p className="m-0 text-white font-bold text-lg md:text-xl">
        ⚠️ ÚLTIMA OPORTUNIDAD - Esta oferta desaparece en: <span className="font-mono text-xl md:text-2xl">{formatted}</span>
      </p>
    </div>
  );
};
