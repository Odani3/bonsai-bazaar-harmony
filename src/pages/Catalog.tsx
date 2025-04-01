
import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import BonsaiGrid from "@/components/catalog/BonsaiGrid";
import BonsaiFilters from "@/components/catalog/BonsaiFilters";
import { bonsais } from "@/data/bonsais";
import { BonsaiFilters as BonsaiFiltersType } from "@/types/bonsai";

const Catalog = () => {
  const [filters, setFilters] = useState<BonsaiFiltersType>({});

  const filteredBonsais = useMemo(() => {
    return bonsais.filter((bonsai) => {
      // Filter by category
      if (filters.category && filters.category !== "all" && bonsai.category !== filters.category) {
        return false;
      }

      // Filter by care level
      if (filters.careLevel && filters.careLevel !== "all" && bonsai.careLevel !== filters.careLevel) {
        return false;
      }

      // Filter by price range
      if (filters.priceRange) {
        if (
          bonsai.price < filters.priceRange.min ||
          bonsai.price > filters.priceRange.max
        ) {
          return false;
        }
      }

      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        return (
          bonsai.name.toLowerCase().includes(query) ||
          bonsai.description.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: BonsaiFiltersType) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4">Catálogo de Bonsais</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção de bonsais cuidadosamente cultivados. Cada um representa anos de paciência
            e dedicação à arte tradicional japonesa.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="md:w-1/4">
            <BonsaiFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>
          
          {/* Bonsai Grid */}
          <div className="md:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                Mostrando {filteredBonsais.length} bonsais
              </p>
            </div>
            <BonsaiGrid bonsais={filteredBonsais} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
