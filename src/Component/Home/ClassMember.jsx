import React from "react";
import ClassMemberCard from "./ClassMemberCard";
import "./ClassMember.scss";

export default function ClassMember({ members }) {
  return (
    <div className="member-list my-5">
      <div className="row">
        <h2 className="component-title my-3">Thành viên lớp:</h2>

        {members.map((member, index) => {
          return <ClassMemberCard member={member} key={index} />;
        })}
      </div>
    </div>
  );
}
