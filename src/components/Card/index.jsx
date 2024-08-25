import { Link } from "react-router-dom";

const Card = ({ title, src, alt, aoClicar, favorito, id }) => {
	return (
		<figure className="w-52 bg-gray-300 flex flex-col rounded shadow-md shadow-gray-400">
			<Link to={`/${id}`}>
				<img src={src} alt={alt} className="h-54 object-cover" />
			</Link>
			<figcaption className="font-bold text-center text-md p-2 h-16">
				{title}
			</figcaption>
			<div className="flex justify-between items-center px-2 pb-2">
				<button onClick={() => aoClicar(id)}>
					<img src={favorito} alt="Ícone de favorito" className="w-5" />
				</button>
			</div>
		</figure>
	);
};

export default Card;
