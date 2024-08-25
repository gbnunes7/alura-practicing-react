import { useContext, useEffect, } from "react"
import { CardContext } from "../context/CardContext"

export const useCardContext = () => {
    const [card,setCard] = useContext(CardContext)

    useEffect(() => {
        fetch("/data/db.json")
            .then((response) => response.json())
            .then((dados) => setCard(dados))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);



    return {
        card,
        setCard
    }

}