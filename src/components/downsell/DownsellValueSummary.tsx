import { Smartphone, Shuffle, Calendar, Gift } from 'lucide-react';

const ValueItem = ({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) => (
  <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl">
    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div className="flex-1 text-left">
      <p className="font-bold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground line-through">{value}</p>
    </div>
  </div>
);

export const DownsellValueSummary = () => {
  return (
    <section className="py-8 px-3 md:px-5">
      <div className="card-neutral p-6 md:p-8 rounded-2xl max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
          🎁 Todo esto incluido:
        </h2>
        
        <div className="grid gap-3 mb-6">
          <ValueItem icon={Smartphone} title="App de Seguimiento" value="Valor: $37" />
          <ValueItem icon={Shuffle} title="Selector Inteligente" value="Valor: $27" />
          <ValueItem icon={Calendar} title="Planificador 90 Días" value="Valor: $27" />
          <ValueItem icon={Gift} title="BONUS: Desafío 21 Días" value="Valor: $37" />
          <ValueItem icon={Gift} title="BONUS: 50 Recetas Express" value="Valor: $27" />
        </div>
        
        <div className="h-px bg-border my-6" />
        
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            Valor total: <span className="line-through">$155</span>
          </p>
          <p className="text-2xl md:text-3xl font-black">
            Hoy solo <span className="text-accent">$12</span>
          </p>
        </div>
      </div>
    </section>
  );
};
