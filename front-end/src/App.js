import { Route, Routes } from "react-router-dom";
import Posts from "./pages/website/Posts";

function App() {
	return (
		<>
		<Routes>
		<Route path="/" element={<Posts/>} />
		</Routes>
		</>
	)
}

export default App;
