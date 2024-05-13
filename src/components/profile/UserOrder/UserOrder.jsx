import React from "react";
import useUser from "../../../feachers/authentication/useUser";
import { Box } from "@mui/material";
import PaymentInfomation from "./PaymentInfomation";
import OrderSwiper from "./OrderSwiper";
import EmptyPage from "../../../ui/EmptyPage";
import Loading from "../../../ui/Loading";

function UserOrder() {
  const { payments, isLoading } = useUser();
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Loading width="100px" color="blue" />
      </Box>
    );
  }

  return payments.length == 0 ? (
    <EmptyPage
      emptySection="User Order List"
      bodyContent="You do not have any Order "
      buttonContent="Car Menu"
      path="/available-cars"
    />
  ) : (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "20px", p: "20px" }}
    >
      {payments.map((payment, i) => (
        <Box
          key={payment._id}
          sx={{
            bgcolor: "primary.100",
            minHeight: "350px",
            borderRadius: "10px",
            display: "flex",
            p: "10px",
          }}
        >
          <PaymentInfomation i={i} length={payments.length} />
          <OrderSwiper products={payment.cart.productDetail} />
        </Box>
      ))}
    </Box>
  );
}

export default UserOrder;
