import type { FC } from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "@/configs/RoutesConst.ts";
import Favourites from "@assets/svg/Favourites.svg?react";
import Basket from "@assets/svg/Basket.svg?react";
import {useBasket} from "@/context/BasketContext.ts";
import {Icon} from "@/components/Icon/Icon.tsx";
import styles from './Header.module.scss';

export const Header: FC = () => {
    const { basketItems } = useBasket();
    const basketCount = basketItems.reduce((sum, item) => sum + item.count, 0);

    return (
        <header className={styles.root}>
            <div className={styles.inner}>
                <NavLink to={ROUTES.MAIN} className={styles.logo}>QPICK</NavLink>
                <div className={styles.actions}>
                    <Icon component={Favourites} />
                    <NavLink to={ROUTES.BASKET} className={styles.basket}>
                        <Icon component={Basket} />
                        <p className={styles.basketCounter}>{basketCount}</p>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};
