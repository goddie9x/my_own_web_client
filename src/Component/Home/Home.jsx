import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Notification from './Notification';
import ClassMember from "./ClassMember";

export default function Home() {
    const [homeData, setHomeData] = React.useState();

    React.useEffect(()=>{
        fetch('http://localhost:3001')
        .then((responsive)=>responsive.json())
        .then((data)=>{
            setHomeData(data);
        })
    },[]);

    return (<div className="container my-4">
        <h1 className="text-center my-3">Chào mừng đến với TE11</h1>
        {!homeData
        &&<Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
        </Box>}
        {homeData
        &&<>
        <Notification notifs = {homeData.Notifs}/>
        <ClassMember members = {homeData.Users}/>
        {homeData.Posts.lenght&&<Notification notifs = {homeData.Posts}/>}
        </>}
    </div>)
}