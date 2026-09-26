import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./RoutesConst";
import AppLayout from "@/layout/AppLayout.tsx";
import MainPage from "@/pages/MainPage.tsx";
import BasketPage from "@/pages/BasketPage.tsx";


export const routesConfig = [
    {
        element: <AppLayout />,
        children: [
            {
                path: ROUTES.MAIN,
                element: <MainPage />,
            },
            {
                path: ROUTES.BASKET,
                element: <BasketPage />,
            },
        ],
    },
];

export const router = createBrowserRouter(routesConfig);
