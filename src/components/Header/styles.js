import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 50px;
  height: 55px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #000000;
  .login {
    margin-left: 35px;
    margin-right: 320px;
    border-radius: 24px;
    width: 70px;
    height: 25px;
    background-color: #386bee;
    color: #ffffff;
    border: 0px;
  }
  .post {
    margin-left: 22px;
    text-decoration: none;
  }
  .post:visited {
    color: #000000;
  }
`;
