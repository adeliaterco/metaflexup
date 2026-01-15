export const ProblemSolutionSection = () => {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-5">
        {/* Problem Card */}
        <div className="card-problem p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-5xl text-center mb-5">❌</div>
          <h3 className="text-center mb-6 text-xl font-bold text-destructive">Sin el Sistema</h3>
          <div className="text-muted-foreground leading-relaxed">
            <p className="mb-2"><strong className="text-foreground">Día 7:</strong> "¿Estoy progresando?"</p>
            <p className="mb-2"><strong className="text-foreground">Día 15:</strong> Motivación cayendo</p>
            <p className="mb-2"><strong className="text-foreground">Día 23:</strong> <span className="text-destructive">Abandonas</span></p>
            <p className="mt-6 text-destructive font-bold">Resultado: Inversión perdida + 0 resultados</p>
          </div>
        </div>
        
        {/* Solution Card */}
        <div className="card-solution p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-5xl text-center mb-5">✅</div>
          <h3 className="text-center mb-6 text-xl font-bold text-accent">Con el Sistema</h3>
          <div className="text-muted-foreground leading-relaxed">
            <p className="mb-2"><strong className="text-foreground">Día 7:</strong> Gráfico muestra -1.2kg</p>
            <p className="mb-2"><strong className="text-foreground">Día 15:</strong> Badge desbloqueado 🏆</p>
            <p className="mb-2"><strong className="text-foreground">Día 90:</strong> <span className="text-accent">-12kg + Certificado</span></p>
            <p className="mt-6 text-accent font-bold">Resultado: Transformación completa</p>
          </div>
        </div>
      </div>
      
      {/* Transition Text */}
      <div className="text-center py-8 px-5 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl leading-relaxed">
          La diferencia es un sistema que <span className="text-primary font-bold">hackea tu cerebro</span> para liberar dopamina cada día.
        </h2>
        <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
          Sin dopamina → Abandonas<br />
          Con dopamina → <strong className="text-accent">No puedes parar</strong>
        </p>
      </div>
    </section>
  );
};
