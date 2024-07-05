import { useState } from "react";
import "./App.css";

function App() {
  let [todo, setTodo] = useState([{ id: 1, title: "제목", content: "내용", isDone: false }]);
  let [title, setTitle] = useState(""); // Todo - 제목
  let [content, setContent] = useState(""); // Todo - 내용

  function onChangeHandler(event) {
    let { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  // Todo 추가하기
  function onSubmitHandler(event) {
    let newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };

    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <div className="head-style">
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className="input-area">
        제목&nbsp;{" "}
        <input name="title" value={title} onChange={onChangeHandler} />
        내용&nbsp;{" "}
        <input name="content" value={content} onChange={onChangeHandler} />
        <button onClick={onSubmitHandler}>추가하기</button>
      </div>

      <h3>진행 중...🔥</h3>
      <div>
        {todo.map(function (item) {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{item.content}</div>
              <button
                onClick={function () {
                  setTodo(todo.filter((todoItem) => todoItem.id !== item.id));
                }}
              >
                삭제
              </button>
              <button>완료</button>
            </div>
          );
        })}
      </div>

      <h3>완료...🎉</h3>
      <div>
        <div>제목</div>
        <div>내용</div>
        <button>삭제</button>
        <button>취소</button>
      </div>
    </div>
  );
}

export default App;
