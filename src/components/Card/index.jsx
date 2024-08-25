import favIconMarcado from "./favorite.png";

const Card = ({ title, src, alt }) => {
	return (
		<figure className="w-52 bg-gray-300 flex flex-col rounded shadow-md shadow-gray-400">
			<img src={src} alt={alt} className="h-54 object-cover" />
			<figcaption className="font-bold text-center text-md p-2 h-16">{title}</figcaption>
			<div className="flex justify-between items-center px-2 pb-2">
				<img src={favIconMarcado} alt="Ícone de favorito" className="w-5" />
			</div>
		</figure>
	);
};

export default Card;
