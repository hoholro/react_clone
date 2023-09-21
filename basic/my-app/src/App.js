import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "나는 멋젱이 수경수";
  return (
    <div>
      <h1 className="hi">안녕하세요 !</h1>
      <h2>{name}</h2>
      <ul>
        <li>1. 헬스장</li>
        <li>1. 스카</li>
        <li>1. 지도보기</li>
        <img
          style={{ width: "200px", height: "200px" }}
          src="https://i.pinimg.com/564x/dd/77/8b/dd778b2f2830051d9ceb60182f555bfd.jpg"
          alt="시나몬롤"
        />
      </ul>
    </div>
  );
}

export default App;
