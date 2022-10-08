import styled from "styled-components";

export const LoginArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;

  .dots-container {
    display: flex;
    width: 21%;
    height: 100vh;

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .logon-content {
    display: flex;
    width: 79%;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #ffffff;

    .logon-container {
      margin-top: 18vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      width: 25%;
      max-width: 290px;
      border-radius: 4px;
      border: 1px solid #ffffff;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      padding: 34px;

      .top-logo-name {
        display: flex;
        
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: left;
        margin:  0;

        img {
          width: 100%;
          max-width: 136px;
        }

        p {
         
          font-family: "Roboto";
          width: 100%;
          font-weight: 200;
          margin:9.5px 0 0 8px;
          color: #ee4d2d;
        }
      }

      p {
        font-size: 25px;
        margin: 20px 0;
        font-weight: 400;
      }
    }
    .footer-container {
      display: flex;
      img {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    
    .dots-container {
      display: none;

      img {
        display: none;
      }
    }
    .logon-content {
      width: 100%;
     
      .logon-container {
      margin: 20%;
      width: 50%;
    }
    }
    
  }
`;
