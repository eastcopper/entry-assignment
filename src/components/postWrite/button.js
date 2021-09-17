import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  _submitBoard = async function () {
    const title = document.getElementsByName("title")[0].value.trim();
    const content = document.getElementsByName("content")[0].value.trim();

    if (title === "") {
      return alert("제목을 입력해주세요.");
    } else if (content === "") {
      return alert("내용을 입력해주세요.");
    }
    const data = { title: title, content: content};
  };

  render() {
    return (
      <div>
        <div id="post_submit">
          <button> 포스트 등록 </button>
        </div>
      </div>
    );
  }
}
