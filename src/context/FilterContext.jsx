import { createContext, useContext, useState, useCallback } from "react";

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
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

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return ctx;
}
