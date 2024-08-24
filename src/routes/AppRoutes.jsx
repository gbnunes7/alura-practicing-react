import Home from "../pages/home";
import Error404 from "../pages/error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/*" element={<Error404/>}/>
				</Routes>
			</BrowserRouter>
	);
}

export default AppRoutes;
