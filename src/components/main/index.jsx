import Card from "../Card";
import Title from "../title";
import { useCardContext } from "../../hooks/useCardContext";

const Main = () => {
	const { card } = useCardContext();

	return (
		<main className="flex-grow flex flex-col justify-center items-center gap-8 p-2">
			<Title>
				<h1>Um lugar para guardar seus vídeos e filmes!</h1>
			</Title>
			<section className="flex justify-center gap-4 align-center">
				{card.map((item, index) => (
					<Card
						key={index}
						src={item.capa}
						title={item.titulo}
						alt={item.titulo}
					/>
				))}
			</section>
		</main>
	);
};

export default Main;
