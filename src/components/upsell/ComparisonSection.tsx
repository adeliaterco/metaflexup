export const ComparisonSection = () => {
  return (
    <section className="py-12 px-5">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          📊 En 90 días estarás en uno de estos lugares:
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Without System */}
        <div className="card-problem p-10 rounded-2xl">
          <div className="text-5xl text-center mb-5">❌</div>
          <h3 className="text-center text-destructive mb-8 text-2xl font-bold">Sin el Sistema</h3>
          <div className="text-muted-foreground text-lg leading-loose">
            <p><strong className="text-foreground">Día 30:</strong> Abandonaste</p>
            <p><strong className="text-foreground">Resultado:</strong> Inversión perdida</p>
            <p><strong className="text-foreground">Peso:</strong> Igual que antes</p>
            <p className="mt-6 text-destructive font-bold text-xl">"Otra vez no pude..."</p>
          </div>
        </div>
        
        {/* With System */}
        <div className="card-solution p-10 rounded-2xl">
          <div className="text-5xl text-center mb-5">✅</div>
          <h3 className="text-center text-accent mb-8 text-2xl font-bold">Con el Sistema</h3>
          <div className="text-muted-foreground text-lg leading-loose">
            <p><strong className="text-foreground">Día 90:</strong> ¡Lo lograste!</p>
            <p><strong className="text-foreground">Resultado:</strong> -12kg alcanzados</p>
            <p><strong className="text-foreground">Peso:</strong> Meta cumplida</p>
            <p className="mt-6 text-accent font-bold text-xl">"SOY IMPARABLE"</p>
          </div>
        </div>
      </div>
      
      <div className="text-center py-12 max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          La diferencia entre estos dos futuros...
        </p>
        <p className="text-2xl md:text-3xl text-primary font-bold leading-relaxed mt-5">
          Es la decisión que tomaste hace 2 minutos.
        </p>
      </div>
    </section>
  );
};
