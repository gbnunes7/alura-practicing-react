import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Main from "../../components/Main";

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Banner backgroundImage={"/public/imagens/banner-home.png"} />
			<Main/>
			<Footer />
		</div>
	);
};

export default Home;
