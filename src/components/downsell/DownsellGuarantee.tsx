import { Shield } from 'lucide-react';

export const DownsellGuarantee = () => {
  return (
    <section className="py-8 px-3 md:px-5">
      <div className="flex items-center justify-center gap-4 max-w-xl mx-auto p-6 bg-accent/10 rounded-2xl">
        <Shield className="w-12 h-12 text-accent flex-shrink-0" />
        <p className="text-left text-muted-foreground">
          <span className="font-bold text-foreground">30 días de garantía incondicional.</span><br />
          Si no te funciona, te devuelvo cada centavo. Sin preguntas.
        </p>
      </div>
    </section>
  );
};
