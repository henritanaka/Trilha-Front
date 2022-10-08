import React, { useEffect } from "react";
import { LoginArea } from "./styled";
import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  // const clientId = process.env.REACT_APP_CLIENT_ID;
  //   useEffect(() => {
  //     const initClient = () => {
  //           gapi.client.init({
  //           clientId: clientId,
  //           scope: ''
  //         });
  //     };
  //     gapi.load('client:auth2', initClient);
  // });
  const onSuccess = (res) => {
    console.log('success:', res);
  };
  const onFailure = (err) => {
      console.log('failed:', err);
  };
  return (
    <div style={{ width: "100%" }}>
      <LoginArea>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Jogo da Trilha</h3>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Digite seu email"
                />
                {/* <p className="forgot-password text-center mt-2">
                  <a href="#">Esqueceu seu login?</a>
                </p> */}
              </div>
              <div className="form-group mt-3">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Digite sua senha"
                />
                <p className="forgot-password text-center mt-2">
                  <a href="#">Esqueceu sua senha?</a>
                </p>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </div>
                <p className="forgot-password text-center mt-2">
                Não tem conta? <a href="#">CADASTRE-SE.</a>
                </p>
            </div>
          </form>
        </div>
      </LoginArea>
    </div>
  );
}
