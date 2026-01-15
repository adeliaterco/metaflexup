import { useEffect } from 'react';

export const HotmartWidget = () => {
  useEffect(() => {
    // Load Hotmart checkout script
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.checkoutElements) {
        // @ts-ignore
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 px-3 md:px-5">
      <div className="widget-container p-6 md:p-12 lg:p-16 rounded-3xl text-center max-w-4xl mx-auto">
        <div className="text-4xl md:text-5xl mb-4 md:mb-5">⚡</div>
        
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-5 leading-tight">
          Desbloquea <span className="text-primary">MetaFlex</span> Completo<br />con <span className="text-primary">1 Solo Clic</span>
        </h2>
        
        <p className="text-3xl md:text-4xl lg:text-5xl text-accent font-black my-6 md:my-8" style={{ textShadow: '0 0 30px hsl(160 84% 39% / 0.5)' }}>$17</p>
        
        <div className="h-0.5 bg-primary/30 max-w-md mx-auto my-6 md:my-10" />
        
        {/* Hotmart Widget Container */}
        <div id="hotmart-sales-funnel" className="my-6 md:my-8 overflow-hidden" />
        
        <div className="h-0.5 bg-primary/30 max-w-md mx-auto my-6 md:my-10" />
        
        <div className="mt-6 md:mt-10 text-accent leading-relaxed text-sm md:text-base">
          <p>
            ✓ App + Planificador + 2 Bonus<br />
            ✓ Acceso inmediato | ✓ Garantía 7 días<br />
            ✓ Sin riesgos | ✓ Pago 100% seguro
          </p>
        </div>
        
        <p className="text-muted-foreground text-xs md:text-sm mt-6 md:mt-8">
          🔒 Ya tienes cuenta en Hotmart | Compra procesada instantáneamente
        </p>
      </div>
    </section>
  );
};
