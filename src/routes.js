import { Login, Register, } from './components';
import { Navigate } from 'react-router-dom';

const routes = (user) => [
    {
      path: '/home',
       element: user ? <Layout /> : <Navigate to='/login' />,
    children: [
    

        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/',
      element: !user ? <MainLayout /> : <Navigate to="/home" />,
      children: [
        { path: 'login', element: <Login /> },
        // { path: 'home', element: <Home /> },
        // { path: 'about-us', element: <About /> },
        { path: 'register', element: <Register /> },
        // { path: 'forgot-password', element: <ForgotPassword /> },
        { path: 'activate', element: <ActivateUser /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];
  

 export default routes;

