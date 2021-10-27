import React from "react";
import {Link} from "react-router-dom";

export default function Social(data) {
  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <Link to={data.facebook}
          className="social-icon text-xs-center"
          target="_blank"
        >
          <i className="fa fa-facebook"></i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to={data.twitter}
          className="social-icon text-xs-center"
          target="_blank"
        >
          <i className="fa fa-twitter"></i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to={data.skype}
          className="social-icon text-xs-center"
          target="_blank"
        >
          <i className="fa fa-skype"></i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to={data.google}
          className="social-icon text-xs-center"
          target="_blank"
        >
          <i className="fa fa-google"></i>
        </Link>
      </li>
    </ul>
  );
}
