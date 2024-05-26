import Home from "./componenet/pages/home/Home";
import UserList from "./componenet/pages/users/UserList";
import NewUser from "./componenet/pages/newusers/NewUsers";
import Products from "./componenet/pages/products/Products";

let routes = [
  { path: "/home", element: <Home /> },
  { path: "/user", element: <UserList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
