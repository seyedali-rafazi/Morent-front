import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postUserFavourit } from "../../services/carServices";

export default function useLikeCars() {
  const queryClient = useQueryClient();

  const { isPending, mutate: userFavourit } = useMutation({
    mutationFn: postUserFavourit,
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
  return { isPending, userFavourit };
}
