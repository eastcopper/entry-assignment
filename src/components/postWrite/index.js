import React from "react";
import Header from "../Header";
import * as S from "../postWrite/styles";

export default function PostWrite() {
  return (
    <>
      <Header />
      <S.Main>
        <textarea className="title" placeholder="제목을 입력하세요." />
        <textarea className="content" placeholder="내용을 입력하세요." />
        <div className="write">
          <button className="writeBtn">작성하기</button>
        </div>
      </S.Main>
    </>
  );
}
