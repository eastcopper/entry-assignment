import React from "react";
import Header from "../header/Header";
import * as S from "./styles";
import Button from "./button"

export default function PostWrite() {
  return (
    <>
      <Header />
      <S.Main>
        <textarea name="title" className="title" placeholder="제목을 입력하세요." />
        <textarea name="content" className="content" placeholder="내용을 입력하세요." />
        <div className="write">
          <S.Button>작성하기</S.Button>
        </div>
      </S.Main>
    </>
  );
}
