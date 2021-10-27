import React from "react";
import Home from '../Component/Home/Home';
import NotFound from '../Component/Common/ErrorPage/NotFound';
import Posts from '../Component/Post/Posts';
import Notifs from '../Component/Post/Notifs';
import PostDetail from '../Component/Post/PostDetail';
import DirectCenter from "../Component/linkShorter/DirectCenter";
import DirectUrl from "../Component/linkShorter/DirectUrl";

export const MainRouter = [
    {
        path: '/',
        component: <Home/>
    },
    {
        path: '/posts',
        component: <Posts/>
    },
    {
        path: '/posts/notifs',
        component: <Notifs/>
    },
    {
        path: '/posts/*',
        component: <PostDetail/>
    },
    {
        path:'/dir',
        component: <DirectCenter/>
    },{
        path:'/dir/:shortUrl',
        component: <DirectUrl/>
    },
    {
        path: '*',
        component: <NotFound/>
    }
]