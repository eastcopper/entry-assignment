import styled from "styled-components";

export const Main = styled.main`
  table {
    width: 800px;
    border-top: 1px solid #444444;
    border-collapse: collapse;
    margin-left: 350px;
    tr {
        border-bottom: 1px solid #444444;
      .numbers {
        display: flex;
        justify-content: center;
        width: 120px;
      }
      .title {
        width: 500px;
        border-left: 1px solid #444444;
      }
      .contents {
        width: 180px;
        border-left: 1px solid #444444;
      }
    }
  }
`;
