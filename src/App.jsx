import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import UserAuth from "./feachers/authentication/UserAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./feachers/authentication/CompleteProfile";
import AvailableCars from "./pages/AvailableCars";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/Complete-profile" element={<CompleteProfile />} />
        <Route path="/available-cars" element={<AvailableCars />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
