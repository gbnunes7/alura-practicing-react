import { useNavigate } from "react-router-dom";

const Error404 = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center gap-8 m-12">
			<p>Essa página não existe</p>
			<button className="bg-blue-400 text-white py-1 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => navigate(-1)}>Voltar</button>
		</div>
	);
};

export default Error404;
