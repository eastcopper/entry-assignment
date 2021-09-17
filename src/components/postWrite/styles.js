import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 495px;
  margin-left: 360px;
  font-size: 21.72px;
  textarea {
    border: 1px solid #cccccc;
    padding-left: 10px;
    font-size: 15px;
    padding-left: 10px;
    font-size: 15px;
    resize: none;
  }
  .title {
    width: 800px;
    height: 50px;
    margin-bottom: 12px;
  }
  .content {
    width: 800px;
    height: 430px;
  }
  .write {
    display: flex;
    justify-content: flex-end;
    margin: 5px;
  }
  .writeBtn {
    border-radius: 24px;
    width: 100px;
    height: 40px;
    background-color: #386bee;
    color: #ffffff;
    border: 0px;
    font-size: 15px;
  }
`;
