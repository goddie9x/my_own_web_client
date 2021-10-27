import React from "react";
import { Link } from "react-router-dom";
import "./NotificationCard.scss";

export default function NotificationCard({ notif }) {
  let updatedAt = new Date(notif.updatedAt);
  const type = ['Bài viết','Thông báo'];

  updatedAt = updatedAt.toDateString();
  return (
    <div
      className="card text-white card-has-bg click-col m-2"
      style={{
        backgroundImage: `url(${notif.avatarUrl})`,
      }}
    >
      <Link to={"/posts/" + notif.slug} className="text-white">
      <img  className="card-img d-none"  src={notif.avatarUrl}  alt={notif.title} />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">{type[notif.type-1]}</small>
            <h4 className="card-title mt-0 h5" >{notif.title}</h4>
            <small>
              <i className="far fa-clock"></i> {updatedAt}
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <img
                className="mr-3 rounded-circle"
                src={notif.authorAvatar}
                alt="author"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="media-body">
                <h6 className="my-0 text-white d-block">{notif.author}</h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
