import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { useSlotsCounter } from '@/hooks/useSlotsCounter';

export const UrgencySection = () => {
  const { formatted } = useCountdownTimer(15);
  const slots = useSlotsCounter(81);

  return (
    <section className="py-12 px-3 md:px-5">
      <div className="urgency-box p-6 md:p-12 rounded-3xl text-center max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">⏰ Esta ventana se cierra en:</h2>
        
        <div className="text-3xl md:text-5xl lg:text-6xl text-primary font-black my-6 md:my-8 font-mono" style={{ textShadow: '0 0 30px hsl(48 96% 53% / 0.6)' }}>
          {formatted}
        </div>
        
        <div className="h-0.5 bg-primary/30 my-6 md:my-8" />
        
        <div className="my-6 md:my-8">
          <p className="text-lg md:text-2xl lg:text-3xl text-destructive font-bold leading-tight">
            🔥 Solo quedan <span className="text-primary">{slots}</span> cupos a $17 hoy
          </p>
        </div>
        
        <div className="mt-8 md:mt-10 p-5 md:p-8 bg-black/40 rounded-xl">
          <h3 className="text-primary text-lg md:text-xl font-bold mb-4 md:mb-5">¿Por qué tan barato?</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
            Porque el <span className="text-destructive font-bold">78% de las personas abandonan</span> antes del día 30 sin un sistema de seguimiento.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
            No quiero que seas parte de ese 78%.
          </p>
          
          <p className="text-accent font-bold leading-relaxed text-sm md:text-base">
            Quiero que seas parte del 22% que llega al día 90 y transforma su vida.
          </p>
          
          <div className="h-px bg-white/20 my-6 md:my-8" />
          
          <p className="text-destructive text-base md:text-xl font-bold mt-4 md:mt-6">
            Si cierras esta página... el precio vuelve a $67.
          </p>
          
          <p className="text-muted-foreground mt-2 md:mt-3 text-sm md:text-base">
            Y no podrás regresar a esta oferta.
          </p>
        </div>
      </div>
    </section>
  );
};
