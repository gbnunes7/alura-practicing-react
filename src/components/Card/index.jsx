import favIconMarcado from "./favorite.png";

const Card = ({ title, src, alt }) => {
	return (
		<figure className="w-52 pb-4 bg-gray-300 flex flex-col gap-2 rounded shadow-md shadow-gray-400">
			<img src={src} alt={alt} className="flex-grow" />
			<div className="p-2 flex flex-col gap-4">
				<figcaption className="font-bold">{title}</figcaption>
				<img src={favIconMarcado} alt="Icone de favorito" className="w-5" />
			</div>
		</figure>
	);
};

export default Card;
