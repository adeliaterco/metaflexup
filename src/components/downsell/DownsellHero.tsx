export const DownsellHero = () => {
  return (
    <section className="py-12 md:py-16 px-3 md:px-5 text-center">
      <div className="text-6xl md:text-8xl mb-6 animate-pulse">🛑</div>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
        ¡ESPERA!
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        Antes de irte... tengo una <span className="text-primary font-bold">última propuesta</span> para ti
      </p>
      
      <div className="max-w-2xl mx-auto space-y-4 mb-10">
        <p className="text-lg md:text-xl text-muted-foreground">
          Entiendo que $17 puede parecer mucho ahora mismo.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">
          Por eso, quiero darte <span className="text-destructive font-bold">UNA ÚLTIMA OPORTUNIDAD...</span>
        </p>
      </div>
      
      <p className="text-xl md:text-2xl font-bold mb-4">
        Llévate <span className="text-primary">MetaFlex</span> completo por solo:
      </p>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="text-2xl md:text-3xl text-muted-foreground line-through">$67</span>
        <span className="text-2xl md:text-3xl text-muted-foreground line-through">$17</span>
        <span className="text-5xl md:text-7xl text-accent font-black" style={{ textShadow: '0 0 30px hsl(160 84% 39% / 0.6)' }}>$12</span>
      </div>
      
      <div className="inline-block bg-destructive text-white px-6 py-2 rounded-full font-bold text-lg animate-pulse">
        🔥 DESCUENTO FINAL - 82% OFF
      </div>
    </section>
  );
};
