import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Vendors from "./Components/Page/Vendors";
import Mega from "./Components/Page/Mega";
import Pages from "./Components/Page/Pages";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/shop", Component: Shop },
      { path: "/blog", Component: Blog },
      { path: "/contact", Component: Contact },
      { path: "/vendor", Component: Vendors },
      { path: "/mega", Component: Mega },
      { path: "/page", Component: Pages },
      { path: "/cart", Component: Cart},
      { path: "/checkout", Component: Checkout },
      {
        path: "/products/:id",
        loader: () => fetch("/Produts.json"),
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
