import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider ,Outlet} from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
// Define your layout component
const AppLayout = () => {

    

    const[userinfo,setUserInfo]= useState();

    useEffect(()=>{
        const data={
            name:"Manisha"
        }
        setUserInfo(data.name);
    
    },[]);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userinfo,setUserInfo}}>
             <div>
             <UserContext.Provider value={{data :"Nishant"}}>
            
            <Header />
            </UserContext.Provider>
            <Outlet/>
        </div>


        </UserContext.Provider>
        </Provider>
       
    );
};


// Define your routes using react-router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",  
                element: <About />,
            },
            {
                path: "/contact",  
                element: <ContactUs />,
            },
            {
                path: "/restaurant/:id",  
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",  
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app with the RouterProvider and routes
root.render(<RouterProvider router={appRouter} />);
