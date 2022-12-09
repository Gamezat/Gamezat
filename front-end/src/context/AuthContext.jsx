import { createContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
	const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
	const navigate = useNavigate();
	const [showPortal, setShowPortal] = useState(false);

	useEffect(() => {
		console.log(showPortal);
	}, [showPortal]);

	// the user
	const [user, setUser] = useState({});
	// the user token
	const [token, setToken] = useState("");
	// the errors from the inputs
	const [errors, setErrors] = useState({
		email: "",
		name: "",
		password: [""],
	});
	// login stuff---------------------
	const { emailInput, passwordInput } = useRef();
	// login email input ref
	// const emailInput = useRef()
	// login password input ref
	// const passwordInput = useRef()
	// login stuff----------------------

	// signUp stuff---------------------

	const { nameInputR, emailInputR, passwordInputR, rPasswordInputR } = useRef();
	// const NameInputR = useRef()
	// const emailInputR = useRef()
	// const passwordInputR = useRef()
	// const rPasswordInputR = useRef()
	// signUp stuff-------------------

	// social media login functions-------------------
	const googleLoginFun = (response) => {
		// to get the data from google res
		const userObject = jwt_decode(response.credential);
		// destruct the data object
		const { name, sub, picture, email } = userObject;
		// assign to variable to send with the request
		const data = {
			name: name,
			email: email,
			image: picture,
			google_id: sub,
		};
		console.log();

		// the req to the end-point
		axios.get("/sanctum/csrf-cookie").then((response) => {
			axios.post("/api/googleLogin", data).then((res) => {
				if (res.status === 200) {
					const token = res.data.token;
					setToken(token);
					setCookie("Token", token, { path: "/" });
					setUser(res.data.user);
					setShowPortal(false);
				} else {
					console.log(res);
				}
			});
		});
	};
	const FacebookLoginFun = (response) => {
		// assign the data from the facebook res to variable to send with the request
		console.log(response);
		const data = {
			name: response.name,
			email: response.email,
			image: response.picture.data.url,
			facebook_id: response.id,
		};
		axios.get("/sanctum/csrf-cookie").then((response) => {
			axios.post("/api/facebookLogin", data).then((res) => {
				if (res.status === 200) {
					const token = res.data.token;
					setToken(token);
					setCookie("Token", token, { path: "/" });
					setUser(res.data.user);
					setShowPortal(false);
				} else {
					console.log(res);
				}
			});
		});
	};

	// social media login functions-------------------

	// login fun to the database
	const loginFun = () => {
		const email = emailInput.current.value;
		const password = passwordInput.current.value;
		const data = {
			email: email,
			password: password,
		};
		if (email && password && email !== "" && password !== "") {
			axios.get("/sanctum/csrf-cookie").then((response) => {
				axios.post("/api/login", data).then((res) => {
					if (res.data.status === 401) {
						setErrors(res.data.errors);
					} else if (res.data.status === 402) {
						setErrors({ user: res.data.errors });
					} else if (res.data.status === 200) {
						const token = res.data.token;
						setToken(token);
						setCookie("Token", token, { path: "/" });
						setUser(res.data.user);
						setShowPortal(false);
					} else {
						console.log(res);
					}
				});
			});
		}
	};
	// register fun to the database
	const registerFun = () => {
		const name = nameInputR.current.value;
		const email = emailInputR.current.value;
		const Password = passwordInputR.current.value;
		const rPassword = rPasswordInputR.current.value;
		const data = {
			name: name,
			email: email,
			password: Password,
			password_confirmation: rPassword,
		};
		if (
			name &&
			email &&
			Password &&
			rPassword &&
			email !== "" &&
			Password !== ""
		) {
			axios.get("/sanctum/csrf-cookie").then((response) => {
				axios.post("/api/register", data).then((res) => {
					if (res.data.status === 401) {
						setErrors(res.data.errors);
					} else if (res.data.status === 200) {
						const token = res.data.token;
						setCookie("Token", token, { path: "/" });
						setToken(token);
						setUser(res.data.user);
						setShowPortal(false);
					} else {
						console.log(res);
					}
				});
			});
		}
	};
	// logout fun to the database
	const logout = () => {
		axios
			.get("/api/logout", {
				headers: {
					Authorization: ` Bearer ${token}`,
				},
			})
			.then((res) => {
				if (res.data.status === 200) {
					removeCookie("Token");
					setUser({});
					setToken("");
					navigate("/", { replace: true });
					setShowPortal(true);
					localStorage.removeItem("for");
					localStorage.removeItem("tickets");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// Get logged in user data
	useEffect(() => {
		if (cookies.Token) {
			setToken(cookies.Token);
			axios
				.get("/api/user", {
					headers: {
						Authorization: `Bearer ${cookies.Token}`,
					},
				})
				.then((res) => {
					if (res.data.status === 200) {
						console.log(res);
						setUser(res.data.user);
					} else {
						console.log(res);
					}
				});
		} else {
			return;
		}
	}, []);
	useEffect(() => {
		console.log(token);
	}, [token]);

	return (
		<>
			<AuthContext.Provider
				value={{
					showPortal,
					setShowPortal,
					token,
					googleLoginFun,
					setUser,
					user,
					FacebookLoginFun,
					emailInput,
					passwordInput,
					loginFun,
					nameInputR,
					emailInputR,
					passwordInputR,
					rPasswordInputR,
					registerFun,
					logout,
					cookies,
				}}
			>
				{children}
			</AuthContext.Provider>
		</>
	);
}