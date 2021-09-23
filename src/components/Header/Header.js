import * as S from "./styles";
import React, { useState } from 'react';
import Login from "../auth/login/login"
import { Link } from "react-router-dom";

export default function Header() {
  const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
  return (
    <>
      <S.Header>
        <span className="post">
          <Link to="/" className="post">
            게시물 보기
          </Link>
        </span>
        <Link to="/write" className="post">
          게시물 등록
        </Link>
        <button className="login" onClick={ openModal }>로그인</button>
        <Login open={ modalOpen } close={ closeModal } header="Modal heading">adsf</Login>
      </S.Header>
    </>
  );
}
