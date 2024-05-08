import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCarById } from "../../services/carServices";

export default function useCarById() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
    retry: false,
  });

  const { product } = data || {};
  return { product, isLoading };
}
