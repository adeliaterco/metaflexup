import appMockup from '@/assets/app-mockup.png';

export const HeroSection = () => {
  return (
    <section className="text-center py-12 md:py-16 px-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
        ⚠️ ¡ESPERA! Tu pedido fue confirmado ✅
      </h1>
      
      <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-relaxed mb-8">
        Pero el 73% de las personas que compraron lo que tú acabas de comprar...<br />
        <strong className="text-destructive">abandonan en 23 días.</strong>
      </h2>
      
      <div className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
        <p className="font-bold text-foreground">No por falta de motivación.</p>
        <p className="font-bold text-foreground">No porque el menú no funcione.</p>
        
        <p className="mt-8">Sino porque les faltó <span className="text-primary font-bold">UNA SOLA PIEZA</span>.</p>
        
        <p className="mt-5">Se llama <strong className="text-primary">MetaFlex</strong> — el sistema que mantiene tu cerebro <span className="text-accent font-bold">enganchado</span> durante 90 días completos.</p>
        
        <p className="mt-8 text-xl md:text-2xl">Y esa pieza... solo está disponible <span className="text-primary font-bold">AQUÍ. AHORA.</span></p>
      </div>
      
      {/* App Mockup */}
      <div className="text-center mt-12">
        <div className="max-w-md mx-auto rounded-2xl glow-animation overflow-hidden">
          <img 
            src={appMockup} 
            alt="App de seguimiento - Mi Progreso mostrando gráfico de pérdida de peso, racha de 45 días y badge desbloqueado" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mt-10">👇 Descubre qué es</p>
    </section>
  );
};
