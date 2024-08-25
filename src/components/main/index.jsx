import { useEffect, useState } from "react";
import Card from "../Card";
import Title from "../title";

const Main = () => {
	const [card, setCard] = useState([]);

	useEffect(() => {
		fetch("/data/db.json")
			.then((response) => response.json())
			.then((dados) => setCard(dados));
	}, []);

	return (
		<main className="flex-grow flex flex-col justify-center items-center gap-8">
			<Title>
				<h1>Um lugar para guardar seus vídeos e filmes!</h1>
			</Title>
			<section className="flex justify-center gap-4 align-center">
				{card.map((item, index) => (
					<Card key={index} src={item.capa} title={item.titulo} alt={item.titulo} />
				))}
			</section>
		</main>
	);
};

export default Main;
