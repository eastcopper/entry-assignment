import React from "react";
import Header from "../header/Header";
import * as S from "./styles";

export default function PostWrite() {
  return (
    <>
      <Header />
      <S.Main>
        <textarea name="title" className="title" placeholder="제목을 입력하세요." />
        <textarea name="content" className="content" placeholder="내용을 입력하세요." />
        <div className="write">
          <button className="writeBtn">작성하기</button>
        </div>
      </S.Main>
    </>
  );
}
