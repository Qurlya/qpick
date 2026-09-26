import Star from "@assets/svg/Star.svg?react";
import {useBasket} from "@/context/BasketContext.ts";
import {useCallback, useEffect, useState} from "react";
import type {Product} from "@/interfaces/Product.ts";
import type {Category} from "@/interfaces/Category.ts";
import {getProducts} from "@/api/ProductsApi.mock.ts";
import {getCategories} from "@/api/CategoriesApi.mock.ts";
import {Button} from "@/components/Button/Button.tsx";
import {Icon} from "@/components/Icon/Icon.tsx";
import {Image} from "@/components/Image/Image.tsx";
import styles from './MainWidget.module.scss';

const HTTP_OK = 200;

export default function MainWidget() {
    const { addToBasket, removeFromBasket, isInBasket } = useBasket();
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const [productsResponse, categoriesResponse] = await Promise.all([
                getProducts(),
                getCategories()
            ]);

            if (productsResponse.status !== HTTP_OK || categoriesResponse.status !== HTTP_OK) {
                throw new Error('Сервис вернул невалидный статус');
            }

            setProducts(productsResponse.products);
            setCategories(categoriesResponse.categories);
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (isLoading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }

    return (
        <div>
            {categories.map((category) => (
                <section key={category.id} className={styles.category}>
                    <p className={styles.categoryTitle}>{category.rusName}</p>

                    <div className={styles.grid}>
                        {products
                            .filter(product => product.category === category.id)
                            .map((product) => (
                                <article key={product.id} className={styles.card}>
                                    <Image src={product.img} alt={product.title} />
                                    <div className={styles.cardBody}>
                                        <div className={styles.cardInfo}>
                                            <p className={styles.cardName}>{product.title}</p>
                                            <p className={styles.cardRating}>
                                                <Icon component={Star} />
                                                {product.rate}
                                            </p>
                                        </div>
                                        <div className={styles.cardAside}>
                                            <div className={styles.cardPrices}>
                                                <p className={styles.cardPriceActual}>{product.newPrice} ₽</p>
                                                {product.oldPrice && (
                                                    <p className={styles.cardPriceOld}>
                                                        {product.oldPrice} ₽
                                                    </p>
                                                )}
                                            </div>
                                            {isInBasket(product.id) ? (
                                                <Button onClick={() => removeFromBasket(product.id)}>
                                                    Убрать
                                                </Button>
                                            ) : (
                                                <Button onClick={() => addToBasket(product)}>
                                                    Купить
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </section>
            ))}
        </div>
    );
}
