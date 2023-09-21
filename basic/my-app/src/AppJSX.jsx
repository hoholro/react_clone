import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "나는 멋쟁이 수경수";
  const list = ["우유", "딸기", "바나나"];
  return (
    <div>
      <h1 className="hi">{`hello ${name}`}</h1>
      <h2>{name}</h2>
      <ul>
        {list.map((item) => {
          return <li>{list}</li>;
        })}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://i.pinimg.com/564x/dd/77/8b/dd778b2f2830051d9ceb60182f555bfd.jpg"
        alt="시나몬롤"
      />
    </div>
  );
}

export default AppJSX;
