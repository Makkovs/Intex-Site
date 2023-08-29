import AuthPage from "./pages/Auth/Auth";
import CatalogPage from "./pages/catalog/Catalog";
import HomePage from "./pages/home/Home";
import Merch from "./pages/Merch/Merch";

import { AUTH_ROUTE, CATALOGE_ROUTE, HOME_ROUTE, MERCH_PAGE_ROUTE } from "./utils/consts";

export const router = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: CATALOGE_ROUTE,
        Component: CatalogPage
    },
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    }, 
    {
        path: MERCH_PAGE_ROUTE + "/:id",
        Component: Merch
    }
]
