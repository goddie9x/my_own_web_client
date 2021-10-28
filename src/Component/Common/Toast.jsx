import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from '@mui/material/Slide';

export default function Toast({ message, type, duration, handleClose }) {
  message = message || "";
  type = type || "info";
  duration = duration || 6000;

  return (
    <div>
      <Snackbar open={true} 
      autoHideDuration={duration} 
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      TransitionComponent={Slide}>
        <MuiAlert
          variant="filled"
          onClose={handleClose}
          severity={type}
          sx={{ width: "100%" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
