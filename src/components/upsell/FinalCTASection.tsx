export const FinalCTASection = () => {
  return (
    <section className="text-center py-16 px-5 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Ya diste el primer paso.</h2>
      
      <div className="text-left max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-loose">
        <p className="mb-4">Compraste el Menú Flexible. <span className="text-accent">✅</span></p>
        <p className="mb-4">Tienes las recetas perfectas. <span className="text-accent">✅</span></p>
        <p className="mb-8">Tienes el plan completo. <span className="text-accent">✅</span></p>
        
        <div className="h-0.5 bg-destructive/30 my-10" />
        
        <p className="mb-6 text-foreground font-bold">
          Pero sin un sistema que hackee tu cerebro para seguir durante 90 días...
        </p>
        
        <p className="mb-10 text-destructive font-bold text-xl">
          Estadísticamente... tienes 78% de probabilidad de abandonar.
        </p>
        
        <div className="h-0.5 bg-accent/30 my-10" />
        
        <p className="mb-6 text-center">
          <strong className="text-primary text-2xl">Por $17</strong> <span className="text-muted-foreground">(menos que 2 cafés)</span>...
        </p>
        
        <p className="mb-10 text-center text-accent">
          Puedes tener <strong className="text-primary">MetaFlex</strong> completo — el sistema que <strong>garantiza</strong> que llegarás al día 90 con resultados reales.
        </p>
      </div>
      
      <div className="mt-12 p-10 card-bonus rounded-2xl">
        <h3 className="text-xl md:text-2xl text-primary font-bold mb-6 leading-relaxed">
          ¿Vale la pena arriesgar $17<br />para proteger tu inversión anterior?
        </h3>
        
        <div className="h-px bg-primary/30 max-w-xs mx-auto my-8" />
        
        <p className="text-muted-foreground text-lg mt-8">La decisión es tuya.</p>
        <p className="text-foreground text-lg mt-5 font-bold">Yo ya te di la pieza que falta.</p>
        <p className="text-accent text-xl mt-5 font-bold">Ahora... tú decides si la tomas.</p>
      </div>
      
      <div className="text-primary mt-12">
        <p>👆 Vuelve arriba y desbloquea con 1 clic</p>
      </div>
    </section>
  );
};
