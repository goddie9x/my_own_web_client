import React from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import "./MoveToTop.scss";
import Button from "@mui/material/Button";

export default function MoveToTop() {
  const [showMoveToTopBtn, setShowMoveToTopBtn] = React.useState(false);
  function moveToTop() {
    window.scrollTo(20, 20);
  }

  React.useEffect(() => {
    function handleDisplayMoveToTop() {
      let isShowMoveToTop = window.scrollY > 200;

      setShowMoveToTopBtn(isShowMoveToTop);
    }

    window.addEventListener("scroll", handleDisplayMoveToTop);

    return () => {
      window.removeEventListener("scroll", handleDisplayMoveToTop);
    };
  });

  return (
      <div className="move-to-top btn">
          {showMoveToTopBtn&&<Button
            variant="contained"
            sx={{ backgroundColor: "#0a1929" }}
            onClick={moveToTop}
          >
            <KeyboardArrowUpSharpIcon />
          </Button>
        }
        </div>
  );
}
