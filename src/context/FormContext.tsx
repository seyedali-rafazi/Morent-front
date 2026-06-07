import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { BillingForm } from "../types";

interface FormContextValue {
  billingForm: BillingForm;
  setBillingForm: Dispatch<SetStateAction<BillingForm>>;
}

const FormContext = createContext<FormContextValue | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [billingForm, setBillingForm] = useState<BillingForm>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
  });

  return (
    <FormContext.Provider value={{ billingForm, setBillingForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormBilling(): FormContextValue {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("useFormBilling was used outside of FormProvider");
  return context;
}
