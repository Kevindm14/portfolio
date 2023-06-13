import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface RouteInterface {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const HomeLazy = lazy(() => import("../pages/Home"));
const ContactLazy = lazy(() => import("../pages/Contact"));

export const routes: RouteInterface[] = [
    {
        to: "/home",
        path: "/home",
        name: "Home",
        Component: HomeLazy
    },
    {
        to: "/contact",
        path: "/contact",
        name: "Contact",
        Component: ContactLazy
    },
]