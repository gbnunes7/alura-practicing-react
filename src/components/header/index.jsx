import { Link } from "react-router-dom";
import logo from "./logo.png";
import HeaderLink from "../headerLink";

const Header = () => {
	return (
		<header className="bg-black flex justify-between py-5 px-96 items-center">
			<Link>
            <img src={logo} alt="Logo cinetag"/>
            </Link>
			<nav>
				<HeaderLink url="./">
					Home
				</HeaderLink>
                <HeaderLink url="./">
					Favoritos
				</HeaderLink>
			</nav>
		</header>
	);
};

export default Header;
