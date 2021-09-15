import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 495px;
  margin-left: 360px;
  font-size: 21.72px;
  table {
    border: 1px black solid;
  }
  span {
    margin-left: 20px;
    margin-right: 20px;
  }
  .title {
    display: inline-flex;
    justify-content: space-between;
    width: 800px;
  }
  .content {
    height: 450px;
    width: 800px;
  }
  .fix {
    display: flex;
    justify-content: flex-end;
    margin: 5px;
  }
  .fixbtn {
    border-radius: 24px;
    width: 100px;
    height: 40px;
    background-color: #EDEDED;
    color: #000000;
    border: 0px;
    font-size: 15px;
  }
  .fixbtn:hover {
      background-color: #386BEE;
      color: #ffffff;
  }
`;
