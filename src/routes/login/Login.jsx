import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [admins, setAdmins] = useState([]);
  let adminAPI = "https://64da6002e947d30a260b2eee.mockapi.io/foods/admins";
  useEffect(() => {
    axios
      .get(adminAPI)
      .then((res) => setAdmins(res.data))
      .catch((err) => console.log(err));
  }, []);

  function login(e) {
    e.preventDefault();
    let exactAdmin = admins.find((admin) => admin.username === username);

    if (!exactAdmin) {
      return toast.error("username or password incorrect", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    }
    let compare = exactAdmin.password === password;
    if (!compare) {
      return toast.error("username or password incorrect", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    }
    console.log(exactAdmin);
    JSON.stringify(localStorage.setItem("auth", JSON.stringify(exactAdmin)));
    toast.success("loged in successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    });
    navigate("/admin");
    window.location.reload();
  }

  return (
    <div className="login">
      <form onSubmit={login}>
        <h1>Login</h1>
        <div className="username">
          <label>username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="password">
          <label>password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" placeholder="Submit" />
      </form>
    </div>
  );
}

export default Login;
