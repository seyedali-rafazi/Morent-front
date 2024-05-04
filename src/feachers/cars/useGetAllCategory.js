import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../services/carServices";

export default function useGetAllCategory() {
  const { data, isLoading } = useQuery({
    queryKey: ["carGroup"],
    queryFn: getAllCategory,
    retry: false,
  });

  const carGroups = data?.carGroup || [];
  return { carGroups, isLoading };
}
