const ProductCard = ({ icon, title, features, value }: { icon: string; title: string; features: string[]; value: string }) => (
  <div className="card-neutral p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="text-5xl text-center mb-5">{icon}</div>
    <h3 className="text-center mb-6 text-lg font-bold text-primary">{title}</h3>
    <div className="text-muted-foreground text-sm leading-relaxed">
      {features.map((feature, i) => (
        <p key={i} className="mb-2">{feature}</p>
      ))}
    </div>
    <p className="text-center mt-5 text-muted-foreground line-through">{value}</p>
  </div>
);

import bonus1Image from "@/assets/bonus1.png";
import bonus2Image from "@/assets/bonus2.png";

const bonusImages: Record<number, string> = {
  1: bonus1Image,
  2: bonus2Image,
};

const BonusCard = ({ number, title, value }: { number: number; title: string; value: string }) => (
  <div className="card-bonus rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <img 
      src={bonusImages[number]} 
      alt={title} 
      className="w-full h-auto"
    />
    <div className="p-4 text-center">
      <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-bold text-sm">🎁 BONUS {number}</span>
      <p className="mt-3 text-muted-foreground line-through">{value}</p>
    </div>
  </div>
);

export const ValueStackSection = () => {
  return (
    <section className="py-12">
      <div className="text-center px-5 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">🎁 Esto es lo que incluye <span className="text-primary">MetaFlex</span>:</h2>
      </div>
      
      {/* Main Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-5">
        <ProductCard
          icon="📱"
          title="App de Seguimiento"
          features={[
            "✅ Check-in en 5 segundos",
            "✅ Gráfico de progreso automático",
            "✅ Sistema de rachas adictivo",
            "✅ Badges desbloqueables",
            "✅ Recordatorios inteligentes"
          ]}
          value="Valor: $37"
        />
        
        <ProductCard
          icon="🎲"
          title="Selector Inteligente"
          features={[
            "✅ \"¿Qué como hoy?\" - Elige por ti",
            "✅ Lista de compras automática",
            "✅ Filtro por calorías objetivo",
            "✅ Nunca repite en 7 días",
            "✅ Cero decisiones, cero fricción"
          ]}
          value="Valor: $27"
        />
        
        <ProductCard
          icon="📅"
          title="Planificador 90 Días"
          features={[
            "✅ Calendario físico imprimible",
            "✅ Tracker de peso semanal",
            "✅ Tablas de medidas corporales",
            "✅ Espacio para fotos progreso",
            "✅ Certificado digital día 90"
          ]}
          value="Valor: $27"
        />
      </div>
      
      {/* Bonus Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-5 mt-10">
        <BonusCard
          number={1}
          title="Desafío 21 Días Turbo"
          value="Valor: $37"
        />
        
        <BonusCard
          number={2}
          title="50 Recetas Express 15min"
          value="Valor: $27"
        />
      </div>
      
    </section>
  );
};
