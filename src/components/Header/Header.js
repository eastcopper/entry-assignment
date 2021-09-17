import * as S from "./styles";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <S.Header>
        <span className="post">게시물 보기</span>
        <span className="post">
        <Link to="/write">게시물 등록</Link></span>
        <button className="login">로그인</button>
      </S.Header>
    </>
  );
}
