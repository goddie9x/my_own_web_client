import React from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import "./MoveToTop.scss";
import Button from "@mui/material/Button";

export default function MoveToTop() {
  const [showMoveToTopBtn, setShowMoveToTopBtn] = React.useState(false);

  function handleDisplayMoveToTop() {
    setShowMoveToTopBtn(window.scrollY > 200);
  }
  function moveToTop(){
    window.scrollTo(20,20);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleDisplayMoveToTop);

    return () => {
      window.removeEventListener("scroll", handleDisplayMoveToTop);
    };
  });

  return (
    <>
      {showMoveToTopBtn && (
        <div className="move-to-top btn">
          <Button variant="contained" 
          sx={{backgroundColor:"#0a1929"}}
          onClick={moveToTop}>
            <KeyboardArrowUpSharpIcon />
          </Button>
        </div>
      )}
    </>
  );
}
