import {createContext, useContext} from "react";
import type {Product} from "@/interfaces/Product.ts";
import type {BasketItem} from "@/interfaces/Basket.ts";


export interface BasketContextProps {
    basketItems: BasketItem[];
    addToBasket: (product: Product) => void;
    removeFromBasket: (id: number) => void;
    isInBasket: (id: number) => boolean;
    removeFromBasketAll: (id: number) => void;
}

export const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error("useBasket must be used within BasketProvider");
    }
    return context;
};
