
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        id: "Home",
        path: "/home",
        lazy: () => import("../pages/Home"),
    },
    {
        id: "Contact",
        path: "/contact",
        lazy: () => import("../pages/Contact"),
    }
])