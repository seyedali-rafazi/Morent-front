import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../services/carServices";
import type { CarGroup } from "../../types";

export default function useGetAllCategory() {
  const { data, isLoading } = useQuery({
    queryKey: ["carGroup"],
    queryFn: getAllCategory,
    retry: false,
  });

  const carGroups: CarGroup[] = data?.carGroup || [];
  return { carGroups, isLoading };
}
