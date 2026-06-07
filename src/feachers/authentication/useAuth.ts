import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getOtp } from "../../services/userAuthService";
import toast from "react-hot-toast";
import type { OtpPayload } from "../../types";

export default function useAuth() {
  const queryClient = useQueryClient();

  const {
    isPending: isCreating,
    mutate: createUser,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err: Error) => {
      toast.error(err?.message || "Something went wrong");
    },
  });

  return {
    isCreating,
    createUser,
    mutateAsync: mutateAsync as (data: OtpPayload) => Promise<{ message: string }>,
  };
}
