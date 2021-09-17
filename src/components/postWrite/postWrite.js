import React from "react";
import Header from "../Header/Header";
import * as S from "./styles";

export default function input({ onSave, changeInput, inputData, resetForm }) {
  const saveBtnClick = (e) => {
    e.preventDefault();
    onSave(inputData);
    resetForm();
  };

  return (
    <>
      <Header />
      <S.Main>
        <form onSubmit={saveBtnClick}>
          <div>
            <input
              type="text"
              name="boardTitle"
              className="title"
              placeholder="제목을 입력해주세요!"
              onChange={changeInput}
              value={inputData.boardTitle}
            />
          </div>
          <div>
            <textarea
              type="text"
              name="boardContent"
              className="content"
              placeholder="내용을 입력해주세요!"
              onChange={changeInput}
              value={inputData.boardContent}
            />
          </div>
          <input
            type="hidden"
            name="boardId"
            onChange={changeInput}
            value={inputData.boardId}
          />
          <div className="write">
            <button type="submit">
              작성하기
            </button>
          </div>
        </form>
      </S.Main>
    </>
  );
}
