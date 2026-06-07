import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCarById } from "../../services/carServices";
import type { Car } from "../../types";

export default function useCarById() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id!),
    retry: false,
    enabled: !!id,
  });

  const product: Car | undefined = data?.product;
  return { product, isLoading };
}
