import Home from "../pages/home";
import Error404 from "../pages/error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedLayout from "../components/fixedLayout";
import { CardProvider } from "../context/CardContext";
import Favorite from "../pages/favorite";
import Player from "../pages/player";

function AppRoutes() {
	return (
		<BrowserRouter>
			<CardProvider>
				<Routes>
					<Route path="/" element={<FixedLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/favoritos" element={<Favorite />} />
						<Route path="/:id" element={<Player />} />
						<Route path="/*" element={<Error404 />} />
					</Route>
				</Routes>
			</CardProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
