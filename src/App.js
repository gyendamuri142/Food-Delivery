import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {Header} from "../src/components/Header";
import Body from "../src/components/Body";
import About from "./components/About";
import { Contact  } from "./components/Contact"; 
import { Error } from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import useOnlinestatus from "./components/useOnlinestatus";
import UserContext from "./utils/Usercontext";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import Cartslice from "./utils/Cartslice";
import Cartitems from "./components/Cart";
import Cart from "./components/Cart";


const AppLayout = () => {

    const [username,setusername]= useState();

    useEffect(()=>{
        const data = { name:"Chinnu",}
        setusername(data.name)
        
    },
   
    []);
   
        return (
            <Provider store={Appstore}>
           < UserContext.Provider value={{loggedinuser:username,setusername}}>
             <>
        <div className="App">
            <Header />
            <Outlet />
        </div>
    </></UserContext.Provider>
    </Provider>
  
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
            },
            {
                path: "/Cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error />
    }
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);