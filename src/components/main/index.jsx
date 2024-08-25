import Card from "../Card";
import Title from "../title";
import { useCardContext } from "../../hooks/useCardContext";
import favIconDesmarcado from "./favorite_outline.png"


const Main = () => {
	const { card, favorito, aoClicar } = useCardContext();

	return (
		<main className="flex-grow flex flex-col justify-center items-center gap-8 p-2">
			<Title>
				<h1>Um lugar para guardar seus vídeos e filmes!</h1>
			</Title>
			<section className="flex justify-center gap-4 align-center">
				{card.map((cardItem) => (
					<Card
						key={cardItem.id}
						id={cardItem.id} 
						title={cardItem.titulo}
						src={cardItem.capa}
						alt={cardItem.titulo}
						aoClicar={aoClicar}
						favorito={favorito[cardItem.id] || favIconDesmarcado}
					/>
				))}
			</section>
		</main>
	);
};

export default Main;
