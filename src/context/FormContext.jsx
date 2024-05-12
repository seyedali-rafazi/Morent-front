import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [billingForm, setBillingForm] = useState({
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

export function useFormBilling() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvier");
  return context;
}
