import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

const FixedLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-grow">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default FixedLayout;
