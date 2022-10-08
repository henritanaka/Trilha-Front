import styled from "styled-components";

export const LoginArea = styled.div`
  background-image: linear-gradient(#00AFFF, #00FF30, #E8DC1C);
  .Auth-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .Auth-form {
    width: 420px;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
  }
  .Auth-form-content {
    padding-left: 12%;
    padding-right: 12%;
    display: flex;
    flex-direction: column;
    .google-login {
      width: 100%;
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      flex-direction: column;
      .social-login-title {
        margin-bottom: 5px;
        .divider {
          span {
            font-family: opensans-light,helvetica,arial,sans-serif;
            color: #666;
            font-size: .95em;
          }
        }
      }
    }
  }
  .Auth-form-title {
    text-align: center;
    margin-bottom: 1em;
    font-size: 24px;
    color: rgb(34, 34, 34);
    font-weight: 800;
    .forgot-password.text-right {
      display: flex;
    } 
  }
  label {
    font-size: 14px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }
`;
