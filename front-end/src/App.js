import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainNav from "./pages/website/MainNav";
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainOutlet from "./outlet/MainOutlet";
import Home from "./pages/website/Home";
import axios from "axios";
import Profile from "./pages/website/Profile";
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="766290884424-if3sip56qtto151e6623p5s1vi6ui6n7.apps.googleusercontent.com">
        <AuthProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<MainOutlet />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/games" element={<p>asdasdas</p>} />
                <Route path="/asd" element={<p>asdasdas</p>} />
              </Route>
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
