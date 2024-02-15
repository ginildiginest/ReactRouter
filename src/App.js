import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import { Root, loader as rootLoaders } from "./routes/root";
import Contact from "./contact/Contact";


export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <Error />,
  //   loader: async ({ request }) => {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const user = await res.json();
  //     return user;
  //   }
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    loader: rootLoaders,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  
]);