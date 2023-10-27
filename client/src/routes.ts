import AuthPage from "./pages/Auth/Auth";
import CatalogPage from "./pages/Catalog/CatalogPage";
import HomePage from "./pages/Home/HomePage";
import Merch from "./pages/Merch/Merch";
import { IRoute } from "./types/routeTypes";
import { HOME_ROUTE, CATALOGE_ROUTE, AUTH_ROUTE, MERCH_PAGE_ROUTE, BASKET_PAGE_ROUTE } from "./utils/consts";


export const router: IRoute[] = [
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
    },
    {
        path: BASKET_PAGE_ROUTE,
        Component: HomePage
    }
];