import { useEffect } from 'react';

export const DownsellHotmartWidget = () => {
  useEffect(() => {
    // Load Hotmart checkout script
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.checkoutElements) {
        // @ts-ignore
        window.checkoutElements.init('salesFunnel').mount('#hotmart-downsell-funnel');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-8 px-3 md:px-5">
      <div className="widget-container p-6 md:p-10 rounded-3xl text-center max-w-2xl mx-auto">
        <div className="text-4xl mb-4">⚡</div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
          Última chance: <span className="text-primary">MetaFlex</span> por <span className="text-accent">$12</span>
        </h2>
        
        <div className="h-0.5 bg-primary/30 max-w-xs mx-auto my-6" />
        
        {/* Hotmart Widget Container */}
        <div id="hotmart-downsell-funnel" className="my-6 overflow-hidden" />
        
        <div className="h-0.5 bg-primary/30 max-w-xs mx-auto my-6" />
        
        <div className="text-accent leading-relaxed text-sm">
          <p>
            ✓ App + Planificador + 2 Bonus<br />
            ✓ Acceso inmediato | ✓ Garantía 30 días<br />
            ✓ Pago 100% seguro
          </p>
        </div>
        
        <p className="text-muted-foreground text-xs mt-6">
          🔒 Ya tienes cuenta en Hotmart | Compra procesada instantáneamente
        </p>
      </div>
    </section>
  );
};
