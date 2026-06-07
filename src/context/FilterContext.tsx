import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface FilterContextValue {
  filterOpen: boolean;
  openFilter: () => void;
  closeFilter: () => void;
  toggleFilter: () => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

interface FilterProviderProps {
  children: ReactNode;
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filterOpen, setFilterOpen] = useState(false);

  const openFilter = useCallback(() => setFilterOpen(true), []);
  const closeFilter = useCallback(() => setFilterOpen(false), []);
  const toggleFilter = useCallback(
    () => setFilterOpen((prev) => !prev),
    []
  );

  return (
    <FilterContext.Provider
      value={{ filterOpen, openFilter, closeFilter, toggleFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter(): FilterContextValue {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return ctx;
}
