import React from "react";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

export default function DirectCenter() {
    const [link,setLink] = React.useState();
    const [linkGendered,setLinkGendered] = React.useState();
    const [errorMessage, setErrorMessage] = React.useState(false);

    function genderShotLink() {
        let data = {url: link}

        fetch(`${window.env.MAIN_API}/dir/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data=>{
            let shortUrl = window.location.href + "/"+data.shortUrl;
            setLinkGendered(shortUrl);
        })
        .catch(err => {
          setErrorMessage(true);
        })
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
                setLink(e.target.value);
            }}
          />
          <div id="urlHelp" className="form-text">
            Try it
          </div>
          {linkGendered&&<div className="gendered my-3 shadow-lg p-3 mb-5 bg-white rounded">
          Link sẽ... à nhầm, link rút gọn của bạn đây:
            <Link to={'/dir/'+linkGendered} className="mx-1">
               {linkGendered} 
            </Link>
              <Button variant="outlined" onClick={copyShortUrl} className="mx-5">Copy</Button>
              </div>}
        </div>
        {errorMessage&&<div className="errorMessage">Oops! Có lỗi sảy ra, bạn thử lại lần nữa xem</div>} 
        
        <button type="submit" className="btn btn-primary create-link-btn mx-5" style={{width:'250px'}} onClick={genderShotLink }>
          Tạo
        </button>
      </div>
    </div>
  );
}
