import Banner from "../../components/banner";
import Card from "../../components/Card";
import Title from "../../components/title";
import { useCardContext } from "../../hooks/useCardContext";

const Favorite = () => {
	const { favoritosFiltrados, aoClicar, favorito } = useCardContext();
	return (
		<>
			<Banner backgroundImage={"/public/imagens/banner-favoritos.png"} />
			<Title>
				<h2>Meus Favoritos</h2>
			</Title>
			<section className="flex justify-center gap-4 p-4 align-center">
				{favoritosFiltrados.length > 0 ? (
					favoritosFiltrados.map((cardItem) => (
						<Card
							key={cardItem.id}
							id={cardItem.id}
							title={cardItem.titulo}
							src={cardItem.capa}
							alt={cardItem.titulo}
							aoClicar={aoClicar}
							favorito={favorito[cardItem.id]} //
						/>
					))
				) : (
					<p>Você ainda não adicionou nenhum titulo ao seus favoritos.</p> //
				)}
			</section>
		</>
	);
};

export default Favorite;
