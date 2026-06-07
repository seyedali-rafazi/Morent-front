import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCard } from "../../services/psymentService";
import toast from "react-hot-toast";

export default function useAddToCard() {
  const queryClient = useQueryClient();

  const { isPending, mutate: addCar } = useMutation({
    mutationFn: addToCard,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err?.message || "Something went wrong");
    },
  });
  return { isPending, addCar };
}
