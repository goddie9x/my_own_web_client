import React from "react";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import BreadcrumbItem from "./BreadcrumbItem";
import './Breadcrumb.scss';

export default function BreadcrumbsCus() {
  const history = useHistory();
  let [breadcrumbs, setBreadcrums] = React.useState(handleSetBreadcrumb());

  function handleSetBreadcrumb() {
    let path = window.location.pathname;
    let tempBreadcrumbs = path.split("/");
    tempBreadcrumbs.shift();

    if (tempBreadcrumbs.length > 0) {

      tempBreadcrumbs = tempBreadcrumbs.map((breadcrumb, index, array) => {
        let currentBreadcrumbArray = array.slice(0, index + 1);
        let currentBreadcrumb = '/'+currentBreadcrumbArray.join('/');
        let currentBreadcrumbName = currentBreadcrumbArray.pop();

        return {
          currentBreadcrumb,
          breadcrumbName: currentBreadcrumbName
        }
      });
    }
    try{
      setBreadcrums(tempBreadcrumbs);
    }
    catch(err){
      return tempBreadcrumbs;
    }
  }

  React.useEffect(() => {
    return history.listen((location) => {
      handleSetBreadcrumb();
    });
  }, [history]);

  return (
    <div className="container my-4">
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbItem breadcrumb="home" />
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            return (
              <BreadcrumbItem
                breadcrumb={breadcrumb}
                length={breadcrumbs.length}
                key={index}
              />
            );
          })}
      </Breadcrumbs>
    </div>
  );
}
