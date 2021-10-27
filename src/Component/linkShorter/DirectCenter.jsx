import React from "react";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import env from "react-dotenv";

export default function DirectCenter() {
    const [link,setLink] = React.useState();
    const [linkGendered,setLinkGendered] = React.useState();
    const [errorMessage, setErrorMessage] = React.useState(false);

    function genderShotLink() {
      if(link){

        let data = {url: link}

        fetch(`${env.MAIN_API}/dir/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.shortUrl){
              let shortUrl = window.location.href + "/"+data.shortUrl;
              setLinkGendered(shortUrl);
            }
            else{
              setErrorMessage(true);
            }
        })
        .catch(err => {
          setErrorMessage(true);
        })
      }
      else{
        setErrorMessage(true)
      }
    }
    function copyShortUrl() {
    navigator.clipboard.writeText(linkGendered);
    }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center text-uppercase">Tạo link rút gọn</h1>
        <div className="mb-3 create-link">
          <label htmlFor="createLink" className="form-label text-white">
            Nhập link rút gọn
          </label>
          <input
            type="text"
            className="form-control"
            id="createLink"
            aria-describedby="urlHelp"
            onChange={(e)=>{
              setErrorMessage(false);
                setLink(e.target.value);
            }}
          />
      
          {linkGendered&&<div className="gendered my-3 shadow-lg p-3 mb-5 bg-white rounded">
          Link sẽ... à nhầm, link rút gọn của bạn đây:
            <Link to={'/dir/'+linkGendered.split('/').pop()} className="mx-1">
               {linkGendered} 
            </Link>
              <Button variant="outlined" onClick={copyShortUrl} className="mx-5">Copy</Button>
              </div>}
        </div>
        {errorMessage&&<div className="errorMessage my-3 text-danger">Oops! Vui lòng nhập đúng link</div>} 
        
        <button type="submit" className="btn btn-primary create-link-btn mx-5" style={{width:'250px'}} onClick={genderShotLink }>
          Tạo
        </button>
      </div>
    </div>
  );
}
