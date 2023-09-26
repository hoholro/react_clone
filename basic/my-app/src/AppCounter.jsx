//appCounter.jsx
import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      {/* prop으로 처리해준다  */}
      <div className="counters">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}

//setState를 그대로 전달하는 건 외부에 데이터 변경의 주도권을 넘겨주는 것과 같으니,
//콜백함수로 감싸서 넘기고 자식 컴포넌트가 그것을 적절한 시점에 호출만 하도록 해야 하는군요!
//그럼 호출하는 입장은 그 기능의 세부 로직은 알지 못 하니까요!

//특정 컴포넌트 안에서만 바뀌는 state라면 해당 컴포넌트 안에서 useState 를 써서 상태 관리를 하는게 좋다
//state가 업데이트 되면 해당 컴포넌트가 리렌더 되기 때문에
//상위 컴포넌트에서 하위 컴포넌트의 state까지 관리하게 된다면,
//하위 컴포넌트만 리렌더 되면 될 것을 부모 컴포넌트 전체가 리렌더 돼버리기 때문이다.
//부모-자식 관계가 여러 단계에 걸쳐 있는 복잡한 컴포넌트일 경우에 모든 상태를 최상위
//컴포넌트에서 다 관리한다고 가정한다면 prop을 하위 컴포넌트에 전달하고 또 전달하게 되어
// 코드 수정 시 귀찮은 반복 작업을 하게 된다.
