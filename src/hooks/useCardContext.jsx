import { useContext, useEffect, } from "react"
import { CardContext } from "../context/CardContext"
import favIconMarcado from "./favorite.png"
import favIconDesmarcado from "./favorite_outline.png"


export const useCardContext = () => {
    const [card,setCard,favorito,setFavorito] = useContext(CardContext)

    useEffect(() => {
        fetch("/data/db.json")
            .then((response) => response.json())
            .then((dados) => setCard(dados))
            .catch((error) => console.error("Error fetching data:", error));
    }, [setCard]);

    function aoClicar(id) {
        setFavorito((prevFavoritos) => ({
            ...prevFavoritos,
            [id]: prevFavoritos[id] === favIconDesmarcado ? favIconMarcado : favIconDesmarcado,
        }));
    }
    


    return {
        card,
        setCard,
        favorito,
        setFavorito,
        aoClicar,
    }

}