import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Public, { PublicPageLoader } from "./Public";
import Login from "./Login";
import Protected from "./Protected";
import Notfound from "./Notfound";
import { Loader } from "lucide-react";
import { loginAction, loginLoader, protectedLoader } from "@/lib/utils";
import { appAuthProvider } from "@/auth";
import { baseRoute } from "@/components/utils/constants";
import { LoginProvider } from "@/hooks/loginProvider";
// import PublicPage, { PublicPageLoader } from './Public';
// import { loginAction, loginLoader, LoginPage } from './Login';
// import Protected, { protectedLoader } from './Protected';
// import NotFound from './NotFound';

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

const Routes = () => {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/partners/",
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
          path: "products",
          loader: protectedLoader,
          element: <Protected />,
          children: [
            {
              path: ":stepId",
              element: <span>protected child</span>,
            },
          ],
        },
      ],
    },
    {
      path: "/logout",
      async action() {
        await appAuthProvider.signout();
        return redirect(`${baseRoute}products`);
      },
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);
  return (
    <RouterProvider router={router} fallbackElement={<Loader color="blue" />} />
  );
};

export default Routes;
