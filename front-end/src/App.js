
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/website/Posts";
import { AuthProvider } from "./context/AuthContext";
import MainNav from "./pages/website/MainNav";
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainOutlet from "./outlet/MainOutlet";
import Home from "./pages/website/Home";
import axios from "axios";
import Profile from "./pages/website/Profile";
import Games from "./pages/website/Games";
import SingleGame from "./pages/website/SingleGame";
import { useEffect } from "react";
import Affiliate from "./pages/website/Affiliate";
import { ProductProvider } from "./context/ProductContext";
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;
function App() {

	return (
		<>
			<GoogleOAuthProvider clientId="766290884424-if3sip56qtto151e6623p5s1vi6ui6n7.apps.googleusercontent.com">
				<AuthProvider>
				<ProductProvider>
					<ThemeProvider>
						<Routes>
							<Route path="/" element={<MainOutlet />}>
								<Route path="/" element={<Home />} />
								<Route path="/profile" element={<Profile />} />
								<Route path="/games" element={<Games />} />
								<Route path="/games/:id" element={<SingleGame />} />
								<Route path="/Affiliate" element={<Affiliate />} />

                <Route path="/community" element={<Posts/>} />
							</Route>
						</Routes>
					</ThemeProvider>
				</ProductProvider>
				</AuthProvider>
			</GoogleOAuthProvider>
		</>
	);

}

export default App;
