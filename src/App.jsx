import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import UserAuth from "./feachers/authentication/UserAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./feachers/authentication/CompleteProfile";
import AvailableCars from "./pages/AvailableCars";
import UserProfile from "./pages/UserProfile";
import UserDashboard from "./components/profile/UserDashboard";
import UserOrder from "./components/profile/UserOrder";
import UserFavourit from "./components/profile/userFavourit/UserFavourit";
import CarRent from "./components/car-rent/CarRent";
import UserCard from "./pages/UserCard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/user-profile" element={<UserProfile />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="user-order" element={<UserOrder />} />
          <Route path="user-favourit" element={<UserFavourit />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/Complete-profile" element={<CompleteProfile />} />
        <Route path="/available-cars" element={<AvailableCars />} />
        <Route path="/available-cars" element={<AvailableCars />} />
        <Route path="/car-rent/:id" element={<CarRent />} />
        <Route path="/user-card" element={<UserCard />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
