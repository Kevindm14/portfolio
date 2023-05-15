import { Home } from "../pages";

interface RouteInterface {
    to: string;
    path: string;
    name: string;
    Component: () => JSX.Element;
}

export const routes: RouteInterface[] = [
    {
        to: "/home",
        path: "/home",
        name: "Home",
        Component: Home
    },
    {
        to: "/projects",
        path: "/projects",
        name: "Projects",
        Component: Home
    },
    {
        to: "/contact",
        path: "/contact",
        name: "Contact",
        Component: Home
    },
]