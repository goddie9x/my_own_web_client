import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./Toast.scss";

export default function Toast({ message, type, title, duration, handleClose }) {
  const currentToast = React.useRef(null);
  title = title || "Thông báo";
  message = message || "";
  type = type || "info";
  duration = duration || 6000;
  handleClose =
    handleClose ||
    function () {
      currentToast.current.remove();
    };
  React.useEffect(() => {
    let timeAutoClouse = setTimeout(handleClose, duration);

    return () => {
      clearTimeout(timeAutoClouse);
    };
  },[]);
  return (
    <div ref={currentToast} className="toast toast-t-r show">
      <Alert severity={type} onClose={handleClose}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
}
