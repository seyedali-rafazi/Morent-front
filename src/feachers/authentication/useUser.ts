import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/userAuthService";
import type { Cart, Payment, User } from "../../types";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  const user: User | undefined = data?.user;
  const cart: Cart | undefined = data?.cart;
  const payments: Payment[] | undefined = data?.payments;

  return { user, cart, payments, isLoading };
}
