import Home from "../pages/home";
import Error404 from "../pages/error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedLayout from "../components/fixedLayout";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<FixedLayout/>}>
					<Route path="/" element={<Home />} />
					<Route path="/*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
