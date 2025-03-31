
import { Bonsai } from "@/types/bonsai";
import BonsaiCard from "./BonsaiCard";

interface BonsaiGridProps {
  bonsais: Bonsai[];
}

const BonsaiGrid = ({ bonsais }: BonsaiGridProps) => {
  if (bonsais.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <h3 className="font-serif text-2xl font-medium mb-2">Nenhum bonsai encontrado</h3>
        <p className="text-muted-foreground">
          Tente ajustar seus filtros ou buscar por outro termo.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bonsais.map((bonsai) => (
        <BonsaiCard key={bonsai.id} bonsai={bonsai} />
      ))}
    </div>
  );
};

export default BonsaiGrid;
