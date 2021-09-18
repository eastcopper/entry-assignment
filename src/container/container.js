import React, { useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList/postList";
import Input from "../components/postWrite/postWrite";
import { boardRemove, boardSave } from "../module/boardReducer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import PostDetail from "../components/postDetail/postDetail";

export default function Container() {
  // State
  let [inputData, setInputData] = useState({
    boardId: "",
    boardTitle: "",
    boardContent: "",
  });

  const dispatch = useDispatch();

  const onRemove = (boardId) => dispatch(boardRemove(boardId));
  const onSave = (saveData) => dispatch(boardSave(saveData));

  const { selectRowData } = useSelector((state) => state.boardReducer);

  if (JSON.stringify(selectRowData) !== "{}") {
    setInputData({
      boardId: selectRowData.boardId,
      boardTitle: selectRowData.boardTitle,
      boardContent: selectRowData.boardContent,
    });
  }

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

  const { boards } = useSelector((state) => state.boardReducer);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
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
          <Route path="/detail/:boardId">
            <PostDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
