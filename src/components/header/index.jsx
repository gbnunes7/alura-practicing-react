import { Link, useLocation } from "react-router-dom";
import logo from "./logo.png";
import HeaderLink from "../headerLink";

const Header = () => {
	useLocation();

	const getUnderlineStyle = (path) => {
		return location.pathname === path ? "underline" : "none";
	};

	return (
		<header className="bg-black flex justify-between py-5 px-96 items-center">
			<Link>
				<img src={logo} alt="Logo cinetag" />
			</Link>
			<nav>
				<HeaderLink url="./" underline={getUnderlineStyle("/")}>
					Home
				</HeaderLink>
				<HeaderLink
					url="./favoritos"
					underline={getUnderlineStyle("/favoritos")}
				>
					Favoritos
				</HeaderLink>
			</nav>
		</header>
	);
};

export default Header;
