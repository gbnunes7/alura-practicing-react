import Banner from "../../components/banner";
import Card from "../../components/Card";
import Title from "../../components/title";
import { useCardContext } from "../../hooks/useCardContext";

const Favorite = () => {
    const {card} = useCardContext()
	return (
		<>
			<Banner backgroundImage={"/public/imagens/banner-favoritos.png"} />
            <Title>
                <h2>Meus Favoritos</h2>
            </Title>
            <section className="flex justify-center gap-4 align-center p-6">
				{card.map((item, index) => (
					<Card key={index} src={item.capa} title={item.titulo} alt={item.titulo} />
				))}
			</section>
		</>
	);
};

export default Favorite;
