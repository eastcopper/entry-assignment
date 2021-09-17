import * as S from "../postList/styles";
import React from "react";
import Header from "../header/Header";

export default function PostList() {
  return (
    <>
      <Header />
      <S.Main>
        <div className="postTitle">
          <hr width="800px" className="line" />
          <span>NO</span>
          <span>제목</span>
          <hr width="800px" className="line" />
        </div>
        <div className="post"></div>
      </S.Main>
    </>
  );
}
