export const GuaranteeSection = () => {
  return (
    <section className="py-12 px-3 md:px-5">
      <div className="guarantee-box p-6 md:p-12 rounded-3xl text-center max-w-4xl mx-auto">
        <div className="text-5xl md:text-6xl mb-4 md:mb-6">🛡️</div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-accent font-bold mb-6 md:mb-8">GARANTÍA ANTI-RIESGO 30 DÍAS</h2>
        
        <div className="h-0.5 bg-accent/30 max-w-xs mx-auto mb-8 md:mb-10" />
        
        <div className="text-left max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
          <p className="mb-4 md:mb-5">Usa el sistema durante <strong className="text-foreground">30 días completos</strong>.</p>
          
          <p className="mb-4 md:mb-5">Si no te mantiene <strong className="text-accent">más organizado, más motivado, más enfocado</strong>...</p>
          
          <p className="mb-4 md:mb-5">Si no sientes que tu cerebro está <strong className="text-accent">enganchado al plan</strong>...</p>
          
          <p><strong className="text-foreground">Mandas un email. Te devolvemos los $17. Sin preguntas.</strong></p>
        </div>
        
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-accent/20">
          <p className="text-accent font-bold text-lg md:text-xl">El riesgo es mío, no tuyo.</p>
          <p className="text-muted-foreground mt-3 md:mt-4 text-sm md:text-base">2,847 personas lo usan. 94% completan los 90 días.</p>
        </div>
      </div>
    </section>
  );
};
