import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {Header} from "../src/components/Header";
import Body from "../src/components/Body";
import About from "./components/About";
import { Contact } from "./components/Contact"; 
import { Error } from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";

const AppLayout = () => {
    return (
    <>
        <div className="App">
            <Header />
            <Outlet />
        </div>
    </>
    )
}

const appRouter = createBrowserRouter([
    { 
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/Restaurantmenu",
                element: <Restaurantmenu/>
            }
        ],
        errorElement: <Error />
    }
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);