import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "../pages/ProductList";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ProductList />
      </div>
    ),
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
