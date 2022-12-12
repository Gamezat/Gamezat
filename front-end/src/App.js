import AnimatedRoutes from "./components/Routes/AnimatedRoutes";
import { AdminProvider } from "./context/AdminContext";
import { AuthProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@material-tailwind/react";
import axios from "axios";
import { ProductProvider } from "./context/ProductContext";
import { FreeGamesProvider } from "./context/FreeGamesContext";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/website/Posts";
import MainNav from "./pages/website/MainNav";
import MainOutlet from "./outlet/MainOutlet";
import DashLayout from "./outlet/DashLayout";
import Home from "./pages/website/Home";
import Profile from "./pages/website/Profile";
import Games from "./pages/website/Games";
import SingleGame from "./pages/website/SingleGame";
import { useEffect } from "react";
import Affiliate from "./pages/website/Affiliate";
import TicTacToe from "./pages/website/TicTacToe";
import OfflineXo from "./components/website/tictactoe/OfflineXo";
import AiXo from "./components/website/tictactoe/AiXo";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/website/About";
import SingleProfile from "./pages/website/SingleProfile";
import DPosts from "./pages/dashboard/DPosts";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;
function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="766290884424-if3sip56qtto151e6623p5s1vi6ui6n7.apps.googleusercontent.com">
        <AuthProvider>
          <AdminProvider>
            <ProductProvider>
              <FreeGamesProvider>
                <ThemeProvider>
                 <AnimatedRoutes/>
                </ThemeProvider>
              </FreeGamesProvider>
            </ProductProvider>
          </AdminProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );

}

export default App;
