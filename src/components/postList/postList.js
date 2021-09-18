import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

export default function PostList({
  boardId,
  boardTitle,
  boardContent,
  onRemove,
}) {
  return (
    <>
      <S.Tr>
        <td className="numbers">
          <Link to={`/detail/${boardId}`}>{boardId}</Link>
        </td>
        <td className="title">
          <Link to={`/detail/${boardId}`}>{boardTitle}</Link>
        </td>
        <td className="contents">{boardContent}</td>
        <td>
          <button onClick={() => onRemove(boardId)}>삭제</button>
        </td>
      </S.Tr>
    </>
  );
}
