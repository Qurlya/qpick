import type { FC } from "react";
import Globus from "@assets/svg/Globus.svg?react";
import Vk from "@assets/svg/VK.svg?react";
import Telegram from "@assets/svg/Telegram.svg?react";
import Whatsapp from "@assets/svg/Whatsapp.svg?react";
import {Icon} from "@/components/Icon/Icon.tsx";
import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={styles.root}>
            <p className={styles.brand}>QPICK</p>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <p className={styles.link}>Избранное</p>
                    <p className={styles.link}>Корзина</p>
                    <p className={styles.link}>Контакты</p>
                </div>
                <div className={`${styles.column} ${styles.columnLoose}`}>
                    <p className={styles.link}>Условия сервиса</p>
                    <div className={styles.languages}>
                        <Icon component={Globus} />
                        <p>Рус</p>
                        <p>Eng</p>
                    </div>
                </div>
            </div>
            <div className={styles.socials}>
                <Icon component={Vk} />
                <Icon component={Telegram} />
                <Icon component={Whatsapp} />
            </div>
        </footer>
    );
};
