import React, { useContext, useRef, useState } from "react";
import { Context } from "../Context/AuthContext";
import history from "../history";

export default function Login() {
  const email = useRef("");
  const password = useRef("");
  const { authenticated, handleLogin } = useContext(Context);

  return (
    <div style={{ fontFamily: "Lato" }} className="container p-3">
      <div className="row">
        <div className="col">
          <p className="text-center">Login</p>
          <form>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => (email.current = e.target.value)}
              />

              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => (password.current = e.target.value)}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  backgroundColor: "#c93b59",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  padding: "0.5rem 2rem",
                  borderRadius: "10rem",
                  border: "none",
                  margin: "2rem 1rem",
                  height: "fit-content",
                }}
                type="button"
                onClick={() => {
                  handleLogin(email.current, password.current).then(() => {
                    history.push("/home");
                    window.location.reload(true);
                  });
                }}
              >
                Login
              </button>
            </div>
            <span>
              Don't have account? <a href="/register">Register</a>
            </span>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}
