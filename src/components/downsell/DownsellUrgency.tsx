import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { X } from 'lucide-react';

export const DownsellUrgency = () => {
  const { formatted } = useCountdownTimer(10);

  return (
    <section className="py-8 px-3 md:px-5">
      <div className="bg-card border border-destructive/30 p-6 md:p-8 rounded-2xl max-w-2xl mx-auto text-center">
        <h3 className="text-lg md:text-xl font-bold mb-6 text-destructive">
          ⚠️ Esta es mi ÚLTIMA oferta
        </h3>
        
        <p className="text-muted-foreground mb-6">
          Si cierras esta página:
        </p>
        
        <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <X className="w-5 h-5 text-destructive flex-shrink-0" />
            <span>El precio vuelve a $67</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="w-5 h-5 text-destructive flex-shrink-0" />
            <span>Pierdes el 82% de descuento</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="w-5 h-5 text-destructive flex-shrink-0" />
            <span>No hay segunda oportunidad</span>
          </div>
        </div>
        
        <div className="text-3xl md:text-5xl text-destructive font-black font-mono" style={{ textShadow: '0 0 20px hsl(0 84% 60% / 0.4)' }}>
          {formatted}
        </div>
      </div>
    </section>
  );
};
