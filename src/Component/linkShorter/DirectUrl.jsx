import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import env from "react-dotenv";

export default function DirectUrl() {
    const [longUrl, setLongUrl] = React.useState();
    const [urlNotExit, setUrlNotExit] = React.useState(false);
 console.log(env.MAIN_API)
    React.useEffect(()=>{
        const path = window.location.pathname.split('/').pop();
        fetch(`${env.MAIN_API}/dir/${path}`)
        .then((res)=>res.json())
        .then(data=>{
            setLongUrl(data.longUrl);
        })
        .catch(err=>{
            setUrlNotExit(true);
        })
    },[]);

    if(longUrl){
        window.location = longUrl;
    }
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Chào mừng bạn đến với trang chuyển hướng link</h1>
        {!longUrl&&<Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
        </Box>}
        {urlNotExit&&<div className="not-exit">Oops link không tồn tại</div>}
      </div>
    </div>
  );
}
