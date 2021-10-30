import * as React from "react";
import TextField from "@mui/material/TextField";
import Toast from "../Toast.jsx";
import Button from "@mui/material/Button";
import env from "react-dotenv";

export default function LoginModal({ handleClose, logo }) {
  const [toast, setToast] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLoginSuccess(token) {
    document.cookie = "tokenUID=" + token + "; path=/";
    handleClose();
    window.location.reload();
  }
  function handleLoginFail() {
    setToast({ type: "error", message: "Đăng nhập thất bại" });
  }
  function login() {
    const data = {
      account: user,
      password: password,
    };

    fetch(`${env.MAIN_API}/user/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("error");
        }
        return res.json();
      })
      .then((data) => {
        let token = data.token;
        if (token) {
          setToast({ type: "success", message: "Đăng nhập thành công" });

          handleLoginSuccess(token);
        }
      })
      .catch((err) => {
        handleLoginFail();
      });
  }
  function setPasswordInput(e) {
    setPassword(e.target.value);
  }
  function setUserInput(e) {
    setUser(e.target.value);
  }
  return (
    <div className="login-form d-flex flex-column align-items-center">
      <img src={logo} className="sub-logo" alt="logo" />
      <h3 className="mb-3">Chào mừng đến với TE11</h3>
      <TextField
        className="my-3"
        required
        id="outlined-required outlined-basic"
        label="Account"
        onChange={setUserInput}
      />
      <TextField
        className="my-3"
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={setPasswordInput}
      />
      <Button variant="contained" onClick={login}>
        Đăng nhập
      </Button>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          handleClose={() => {
            setToast(false);
          }}
        />
      )}
    </div>
  );
}
