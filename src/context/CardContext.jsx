import { createContext, useState } from "react";

export const CardContext = createContext([[], () => {}, '', () => {}]);

export const CardProvider = ({ children }) => {
    const [card, setCard] = useState([]);
    const [favorito, setFavorito] = useState({})

    return (
        <CardContext.Provider value={[ card, setCard,favorito,setFavorito]}>
            {children}
        </CardContext.Provider>
    );
};

