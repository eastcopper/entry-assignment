import React from "react";
import * as S from "./styles";

export default function PostList({
  boardId,
  boardTitle,
  boardContent,
  onRemove,
  onRowClick,
}) {
  return (
    <>
      <S.Tr>
        <td className="numbers" onClick={() => onRowClick(boardId)}>{boardId}</td>
        <td className="title" onClick={() => onRowClick(boardId)}>{boardTitle}</td>
        <td className="contents" onClick={() => onRowClick(boardId)}>{boardContent}</td>
        <td>
          <button onClick={() => onRemove(boardId)}>삭제</button>
        </td>
      </S.Tr>
    </>
  );
}
