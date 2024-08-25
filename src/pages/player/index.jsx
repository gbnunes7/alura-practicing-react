import { useParams } from "react-router-dom";
import Banner from "../../components/banner";
import Title from "../../components/title";
import { useCardContext } from "../../hooks/useCardContext";

const Player = () => {
	const { card } = useCardContext();
	const param = useParams();
	const video = card.find((video) => {
		return video.id === Number(param.id);
	});

    if (!video) {
		return <p>Video not found</p>; 
    }


	return (
		<>
			<Banner backgroundImage={"public/imagens/banner-player.png"} />
			<Title>
				<h2>Player</h2>
			</Title>
			<section className="flex justify-center gap-4 align-center">
				<iframe
					width="560"
					height="315"
					src={video.link}
					title={video.titulo}
					frameBorder='0'
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</section>
		</>
	);
};

export default Player;
