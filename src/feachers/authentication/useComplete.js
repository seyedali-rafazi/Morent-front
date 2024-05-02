import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeUser } from "../../services/userAuthService";

export default function useCompleteUser() {
    const queryClient = useQueryClient();
  
    const { isPending: isUpdating, mutate: complete } = useMutation({
      mutationFn: completeUser,
      onSuccess: (data) => {
        toast.success(data.message);
  
        queryClient.invalidateQueries({
          queryKey: ["user"],
        });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });
    return { isUpdating, complete };
  }
  