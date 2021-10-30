import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function BreadcrumbItem(props) {
  if (props.breadcrumb === "") {
    return "";
  }
  if (props.breadcrumb === "home") {
    return (
      <Link to="/">
        <HomeIcon fontSize="small" /> Home
      </Link>
    );
  }
  let { breadcrumb} = props;
  return <Link to={breadcrumb.currentBreadcrumb}>{breadcrumb.breadcrumbName}</Link>;
}
