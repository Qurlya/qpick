import { Outlet } from "react-router-dom";
import {Header} from "@widgets/Header.tsx";
import {Footer} from "@widgets/Footer.tsx";
import {BasketProvider} from "@/context/BasketProvider.tsx";
import styles from './AppLayout.module.scss';


export default function AppLayout() {
    return (
        <BasketProvider>
            <div className={styles.root}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </BasketProvider>
    );
}
