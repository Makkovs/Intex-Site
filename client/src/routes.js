import AuthPage from "./pages/Auth/Auth";
import CatalogPage from "./pages/catalog/Catalog";
import HomePage from "./pages/home/Home";
import { AUTH_ROUTE, CATALOGE_ROUTE, HOME_ROUTE } from "./utils/consts";

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
    }
]
