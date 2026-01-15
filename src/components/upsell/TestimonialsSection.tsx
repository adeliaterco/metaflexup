import testimonialAna from '@/assets/testimonial-ana.jpg';
import testimonialCarlos from '@/assets/testimonial-carlos.jpg';
import testimonialLaura from '@/assets/testimonial-laura.jpg';

const Testimonial = ({ image, name, result, text }: { image: string; name: string; result: string; text: React.ReactNode }) => (
  <div className="testimonial-card p-5 md:p-7 rounded-xl mb-6">
    <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-5">
      <img 
        src={image} 
        alt={`Foto de ${name}`}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0 border-2 border-accent"
      />
      <div>
        <p className="font-bold text-base md:text-lg">{name}</p>
        <p className="text-accent text-xs md:text-sm">{result}</p>
      </div>
    </div>
    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{text}</p>
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-5">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
          💬 Esto dicen quienes usan <span className="text-primary">MetaFlex</span>:
        </h2>
      </div>
      
      <Testimonial
        image={testimonialAna}
        name="Ana Rodríguez"
        result="12kg perdidos en 90 días"
        text={
          <>
            "Llevo 47 días. Mi racha es mi <strong className="text-accent">tesoro</strong>. Cada mañana abro el app y veo mi gráfico bajando. Ayer desbloqueé el badge de 45 días y lloré. <strong className="text-foreground">Sin este sistema hubiera abandonado en la semana 2 como siempre</strong>."
          </>
        }
      />
      
      <Testimonial
        image={testimonialCarlos}
        name="Carlos Méndez"
        result="8kg de músculo ganado"
        text={
          <>
            "El selector aleatorio me <strong className="text-accent">cambió la vida</strong>. Ya no pierdo 30 minutos decidiendo qué comer. El app decide, yo ejecuto. <strong className="text-foreground">60 días consecutivos. No voy a romper mi racha ni loco</strong>."
          </>
        }
      />
      
      <Testimonial
        image={testimonialLaura}
        name="Laura Fernández"
        result="9kg en 60 días"
        text={
          <>
            "Los recordatorios son mi <strong className="text-accent">salvavidas</strong>. Siempre olvidaba comer a tiempo. Metabolismo lento, cero resultados. Ahora el app me avisa cada 3 horas. <strong className="text-foreground">9kg menos y todavía me faltan 30 días</strong>."
          </>
        }
      />
    </section>
  );
};
