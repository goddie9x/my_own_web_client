import * as React from "react";
import TextField from "@mui/material/TextField";
import logo from "../../../medias/avatar_logo.jpg";
import Toast from "../Toast.jsx";
import Button from "@mui/material/Button";

export default function LoginModal() {
  const [toast, setToast] = React.useState(false);

  function login() {}

  return (
    <div className="login-form d-flex flex-column align-items-center">
      <img src={logo} className="sub-logo" alt="logo" />
      <h3 className="mb-3">Chào mừng đến với TE11</h3>
      <TextField
        className="my-3"
        required
        id="outlined-required outlined-basic"
        label="Account"
      />
      <TextField
        className="my-3"
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button
        variant="contained"
        onClick={login}
      >
        Đăng nhập
      </Button>
      {toast && (
        <Toast
          message=""
          type="success"
          handleClose={() => {
            setToast(false);
          }}
        />
      )}
    </div>
  );
}
