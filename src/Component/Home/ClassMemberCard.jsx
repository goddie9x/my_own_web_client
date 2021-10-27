import React from "react";
import {Link} from "react-router-dom";

export default function ClassMemberCard(member) {
    return <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="image-flip" >
        <div className="mainflip flip-0">
            <div className="frontside">
                <div className="card">
                    <div className="card-body text-center">
                        <p><img className=" img-fluid" src={member.image} alt={member.name}/></p>
                        <h4 className="card-title">{member.name||'Hiện chưa đặt tên'}</h4>
                        <p className="card-text">{member.quote||'Đang nghĩ quote'}</p>
                        <Link to={member._id||'/'} className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></Link>
                    </div>
                </div>
            </div>
            <div className="backside">
                <div className="card">
                    <div className="card-body text-center mt-4">
                        <h4 className="card-title">{member.name||'Hiện chưa đặt tên'}</h4>
                        <p className="card-text">{member.description||'Chờ phần mô tả'}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}