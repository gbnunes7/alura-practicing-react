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
		<main className="flex flex-col gap-10 justify-center align-center bg-blue-500 p-4">
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
