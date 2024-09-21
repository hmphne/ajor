import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Public, { PublicPageLoader } from "./Public";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
import Notfound from "./Notfound";
import { loginAction, loginLoader, protectedLoader } from "@/lib/utils";
import { appAuthProvider } from "@/auth";
import { baseRoute } from "@/components/utils/constants";
import { LoginProvider } from "@/hooks/loginProvider";
import Appshell from "@/components/ui/app-shell";
import Order from "./Order";
import Inquiry from "./Inquiry";

const Layout = () => {
  return <Outlet />;
};

const LoginLayout = () => {
  return (
    <LoginProvider>
      <Outlet />
    </LoginProvider>
  );
};

const ProtectedLayout = () => {
  return (
    <Appshell>
      <Outlet />
    </Appshell>
  );
};

const Routes = () => {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/partners",
      loader() {
        return { token: appAuthProvider.token };
      },
      element: <Layout />,
      children: [
        {
          index: true,
          loader: PublicPageLoader,
          element: <Public />,
        },
        {
          path: "login",
          element: <LoginLayout />,
          children: [
            {
              index: true,
              action: loginAction,
              loader: loginLoader,
              element: <Login />,
            },
          ],
        },
        {
          path: "",
          element: <ProtectedLayout />,
          children: [
            {
              path: "products",
              index: true,
              loader: protectedLoader,
              element: <Products />,
            },
            {
              path: "cart",
              loader: protectedLoader,
              element: <Cart />,
            },
            {
              path: "inquiry",
              loader: protectedLoader,
              element: <Inquiry />,
            },
            {
              path: "order",
              loader: protectedLoader,
              element: <Order />,
            },
          ],
        },
      ],
    },
    {
      path: "/logout",
      async action() {
        await appAuthProvider.signout();
        return redirect(`${baseRoute}/login`);
      },
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
