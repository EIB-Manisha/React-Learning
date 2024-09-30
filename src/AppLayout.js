import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider ,Outlet} from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// Define your layout component
const AppLayout = () => {
    return (
        <div>
            
            <Header />
            <Outlet/>
        </div>
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
                path: "/restaurants/:id",  
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app with the RouterProvider and routes
root.render(<RouterProvider router={appRouter} />);
