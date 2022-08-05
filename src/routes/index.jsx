import React from 'react';
import { useRoutes } from 'react-router-dom';
import AuthGuard from '../guards/auth.guard';
import NoAuthGuard from '../guards/no-auth.guard';
import HomeLayout from '../layouts/home';
import Booking from '../pages/booking/booking';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import MovieDetail from '../pages/movie-detail/movie-detail';

export default function Router() {

    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/movie/:movieId',
                    element: <MovieDetail />
                },

                {
                    path: '/',
                    element: <AuthGuard />,
                    children: [
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking />
                        },
                    ]
                },
                {
                    path: '/',
                    element: <NoAuthGuard />,
                    children: [
                        {
                            path: '/login',
                            element: <Login />
                        },
                    ]
                },


            ]
        }
    ]);

    return routing;
}
