import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getAllCars } from "../../services/carServices";
import queryString from "query-string";
import type { Car } from "../../types";

export default function useGetAllCars() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const decodedSearch = decodeURIComponent(search);
  const { data, isLoading } = useQuery({
    queryKey: ["carList", queryObject],
    queryFn: () => getAllCars(decodedSearch),
    retry: false,
  });

  const products: Car[] = data?.products || [];
  return { products, isLoading };
}
