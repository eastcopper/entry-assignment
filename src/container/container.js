import React, { useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList/postList";
import Input from "../components/postWrite/postWrite";
import { boardRemove, boardSave, boardSelectRow } from "../module/boardReducer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Container() {
  // State
  let [inputData, setInputData] = useState({
    boardId: "",
    boardTitle: "",
    boardContent: "",
  });

  // 함수형 컴포넌트에서 dispatch 를 사용할 수 있게 해줌
  const dispatch = useDispatch();

  // onRemove 와 onSave 는 Action 을 dispatch 하는 함수
  const onRemove = (boardId) => dispatch(boardRemove(boardId));
  const onSave = (saveData) => dispatch(boardSave(saveData));

  // reducer state 의 selectRowData field 를 가져온 뒤 subscribe(구독)
  const { selectRowData } = useSelector((state) => state.boardReducer);

  // User Function
  const onRowClick = (boardId) => {
    // dispatch 를 하고,
    dispatch(boardSelectRow(boardId));

    // inputData 에 selectRowData 의 값을 반영
    if (JSON.stringify(selectRowData) !== "{}") {
      setInputData({
        boardId: selectRowData.boardId,
        boardTitle: selectRowData.boardTitle,
        boardContent: selectRowData.boardContent,
      });
    }
  };

  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputData({
      boardId: "",
      boardTitle: "",
      boardContent: "",
    });
  };

  // reducer state 의 boards field 를 가져온뒤 subscribe(구독)
  const { boards } = useSelector((state) => state.boardReducer);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
            <S.Main>
              <span>
                <table>
                  <tr>
                    <td className="numbers">NO</td>
                    <td className="title">제목</td>
                    <td className="contents">내용</td>
                  </tr>
                  {boards.map((row) => (
                    <PostList
                      boardId={row.boardId}
                      boardTitle={row.boardTitle}
                      boardContent={row.boardContent}
                      onRemove={onRemove}
                      onRowClick={onRowClick}
                    />
                  ))}
                </table>
              </span>
            </S.Main>
          </Route>
          <Route path="/write">
            <Input
              onSave={onSave}
              changeInput={changeInput}
              inputData={inputData}
              resetForm={resetForm}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
