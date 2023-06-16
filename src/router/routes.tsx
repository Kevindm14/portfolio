
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                id: "Home",
                index: true,
                path: "/",
                lazy: () => import("../pages/Home/Home.tsx"),
            },
            {
                path: "*",
                element: <NoMatch />,
            },
        ]
    },
])

// eslint-disable-next-line react-refresh/only-export-components
function NoMatch() {
    return (
        <div className="flex flex-col justify-center text-center space-y-10 h-screen overflow-hidden">
            <h1 className="text-6xl uppercase w-80 font-extrabold mx-auto text-white">404</h1>
        </div>
    )
}