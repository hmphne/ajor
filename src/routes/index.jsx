import {
    Outlet,
    RouterProvider,
    createBrowserRouter,
    redirect,
  } from 'react-router-dom';  
import Public, { PublicPageLoader } from './Public';
import Login from './Login';
import Protected from './Protected';
import Notfound from './Notfound';
import { Loader } from 'lucide-react';
import { appAuthProvider } from '@/auth';
import { loginAction, loginLoader, protectedLoader } from '@/lib/utils';
  // import PublicPage, { PublicPageLoader } from './Public';
  // import { loginAction, loginLoader, LoginPage } from './Login';
  // import Protected, { protectedLoader } from './Protected';
  // import NotFound from './NotFound';
  
  const Layout = () => {
    return <Outlet />;
  };
  
  const Routes = () => {
    const router = createBrowserRouter([
      {
        id: 'root',
        path: '/',
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
            path: 'login',
            action: loginAction,
            loader: loginLoader,
            element: <Login />,
            children: [
              // other component for handle singIn & singUp
            ],
          },
          {
            path: 'profile',
            loader: protectedLoader,
            element: <Protected />,
            children: [
              {
                path: ':stepId',
                element: <span>protected child</span>,
              },
            ],
          },
        ],
      },
      {
        path: '/logout',
        async action() {
          await appAuthProvider.signout();
          return redirect('/profile');
        },
      },
      {
        path: '*',
        element: <Notfound />,
      },
    ]);
    return (
      <RouterProvider router={router} fallbackElement={<Loader color='blue' />} />
    );
  };
  
  export default Routes;
  