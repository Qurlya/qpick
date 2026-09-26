import Minus from "@assets/svg/Minus.svg?react";
import Plus from "@assets/svg/Plus.svg?react";
import Trashcan from "@assets/svg/Trashcan.svg?react";
import {useBasket} from "@/context/BasketContext.ts";
import type {BasketItem} from "@/interfaces/Basket.ts";
import {Button} from "@/components/Button/Button.tsx";
import {Icon} from "@/components/Icon/Icon.tsx";
import {Image} from "@/components/Image/Image.tsx";
import styles from './BasketWidget.module.scss';

export default function BasketWidget() {
    const { basketItems, addToBasket, removeFromBasket, removeFromBasketAll } = useBasket();

    const calculateTotal = () => {
        return basketItems.reduce((total, item) => total + (item.newPrice * item.count), 0);
    };

    const handleAdd = (item: BasketItem) => {
        addToBasket({
            id: item.id,
            img: item.img,
            title: item.title,
            newPrice: item.newPrice,
        });
    };

    const handleRemoveItem = (id: number) => {
        removeFromBasket(id);
    };
    const handleRemoveProduct = (id: number) => {
        removeFromBasketAll(id);
    };

    if (basketItems.length === 0) {
        return (
            <>
                <p className={styles.title}>Корзина</p>
                <p className={styles.empty}>Корзина пуста</p>
            </>
        );
    }

    return (
        <>
            <p className={styles.title}>Корзина</p>
            <div className={styles.layout}>
                <div className={styles.list}>
                    {basketItems.map((item) => (
                        <article key={item.id} className={styles.item}>
                            <div className={styles.itemMedia}>
                                <Image src={item.img} alt={item.title} variant="thumbnail" />
                                <div className={styles.itemQuantity}>
                                    <Button variant="icon" onClick={() => handleRemoveItem(item.id)}>
                                        <Icon component={Minus} />
                                    </Button>
                                    <p className={styles.itemCount}>{item.count}</p>
                                    <Button variant="icon" onClick={() => handleAdd(item)}>
                                        <Icon component={Plus} />
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.itemBody}>
                                <p className={styles.itemName}>{item.title}</p>
                                <p className={styles.itemPrice}>{item.newPrice} ₽</p>
                            </div>
                            <div className={styles.itemAside}>
                                <Button variant="icon" onClick={() => handleRemoveProduct(item.id)}>
                                    <Icon component={Trashcan} />
                                </Button>
                                <p className={styles.itemTotal}>{item.newPrice * item.count} ₽</p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className={styles.summary}>
                    <div className={styles.summaryRow}>
                        <p className={styles.summaryLabel}>ИТОГО</p>
                        <p className={styles.summaryTotal}>₽ {calculateTotal()}</p>
                    </div>
                    <Button variant="primary">Перейти к оформлению</Button>
                </div>
            </div>
        </>
    );
}
