import * as S from "../Header/styles";
import React from "react";

export default function Header() {
  return (
    <>
      <S.Header>
        <span className="post">게시물 보기</span>
        <span className="post">게시물 등록</span>
        <button className="login">로그인</button>
      </S.Header>
    </>
  );
}
