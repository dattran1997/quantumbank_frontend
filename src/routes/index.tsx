import HomePage from "@/pages/HomePage/HomePage";
import LadingPage from "@/pages/LandingPage/LandingPage";
import NotFound from "@/pages/NotFound";
import { RouteObject } from "react-router";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import TransferSubPage from "@/pages/HomePage/TransferSubPage/TransferSubPage";
import LoginPageContainer from "@/pages/LoginPage/LoginPage.container";
import RegisterPageContainer from "@/pages/RegisterPage/RegisterPage.container";
import HomeSubPageContainer from "@/pages/HomePage/HomeSubPage/HomeSubPage.container";
import TransferSubPageContainer from "@/pages/HomePage/TransferSubPage/TransferSubPage.container";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <LadingPage />,
    },
    {
        path: '/home',
        element: <PrivateRoute component={<HomePage />} />,
        children: [
            {element: <HomeSubPageContainer />, index: true},
            {element: <TransferSubPageContainer />, path: 'transfer'},
        ]
    },
    {
        path: '/login',
        element: <PublicRoute component={<LoginPageContainer />} />,
    },
    {
        path: '/register',
        element: <RegisterPageContainer />,
    },
    {
        path: '*',
        element: <NotFound />,
    }
];

export default routes;