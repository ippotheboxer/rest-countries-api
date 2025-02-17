import { createContext, useState, ReactNode } from "react";

interface FilterContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  return (
    <FilterContext.Provider value={{ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }}>
      {children}
    </FilterContext.Provider>
  );
};
