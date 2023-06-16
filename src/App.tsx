import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import { Loading } from "./components";

export default function App() {
    return <RouterProvider router={routes} fallbackElement={<Loading />}/>
}