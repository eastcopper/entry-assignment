import * as S from "./styles";
import React from "react";
import Header from "../Header/Header";

export default function PostDetail(
  boardTitle,
  boardContent
) {
  let writer = true;

  return (
    <>
      <Header/>
      <S.Main>
        <table className="title">
            <span>엔트리 프론트엔드 인턴 게시판입니다.</span>
            <span>작성자</span>
        </table>
        <table className="content">
          <br />
          <span>엔트리 프론트엔드 인턴 게시판 상세보기 디자인입니다.</span>
        </table>
        <div className="fix">
          {writer ? <button className="fixbtn">수정하기</button> : <span> </span>}  
        </div>
      </S.Main>
    </>
  );
}
