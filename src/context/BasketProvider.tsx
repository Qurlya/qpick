import {useEffect, useState, type ReactNode} from "react";
import type {Product} from "@/interfaces/Product.ts";
import type {BasketItem} from "@/interfaces/Basket.ts";
import {BasketContext} from "@/context/BasketContext.ts";


interface BasketProviderProps {
    children: ReactNode;
}

export const BasketProvider = ({ children }: BasketProviderProps) => {
    const [basketItems, setBasketItems] = useState<BasketItem[]>(() => {
        const stored = sessionStorage.getItem("basket");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        sessionStorage.setItem("basket", JSON.stringify(basketItems));
    }, [basketItems]);

    const addToBasket = (product: Product) => {
        setBasketItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [...prev, {
                id: product.id,
                img: product.img,
                title: product.title,
                newPrice: product.newPrice,
                count: 1
            }];
        });
    };

    const removeFromBasket = (id: number) => {
        setBasketItems(prev => {
            const existing = prev.find(item => item.id === id);
            if (existing && existing.count > 1) {
                return prev.map(item =>
                    item.id === id
                        ? { ...item, count: item.count - 1 }
                        : item
                );
            }
            return prev.filter(item => item.id !== id);
        });
    };
    const removeFromBasketAll = (id: number) => {
        setBasketItems(prev => {
            return prev.filter(item => item.id !== id);
        });
    };

    const isInBasket = (id: number) => {
        return basketItems.some(item => item.id === id);
    };

    return (
        <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket, isInBasket, removeFromBasketAll }}>
            {children}
        </BasketContext.Provider>
    );
};
