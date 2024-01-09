import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./pages/About";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./pages/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./pages/Grocery";

const Grocery = lazy(() => import("./pages/Grocery"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
