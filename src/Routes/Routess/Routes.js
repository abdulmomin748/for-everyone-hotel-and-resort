import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About';
import Blog from '../../Pages/Blog';
import RoomDetails from '../../Pages/common/RoomDetails';
import ContactUs from '../../Pages/ContactUs';
import ErrorPage from '../../Pages/ErrorPage';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Profile from '../../Pages/Profile';
import Register from '../../Pages/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog /></PrivateRoute>
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/profile',
                element: <Profile />,
            }
            ,
            {
                path: '/roomDetails',
                element: <PrivateRoute><RoomDetails /></PrivateRoute>,
            }
        ]
    }
])

export default router;