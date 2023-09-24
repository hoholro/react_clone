import React, { useState } from 'react'

export default function Counter() {
    // 카운터 만들기 1
    // 변경가능한 숫자 변수 설정하기
    // 버튼을 눌렀을때 counter가 올라가야함
    // let num = 0; -> 근데 이렇게 사용했을경우 ui에 나오질 않는다 리액트는 useState를 사용해서 처리한다
    // 리액트는 대체로 const로 지정해서 사용하는 경우가 있는데 이걸 자세히 알려면 구글링 해보아야 겠다!
    const [count, setcount] = useState(0)
    return (
    <div className='counter'>
        <span className='number'>{count}</span>
        <button className='button' onClick={() =>{
            // setcount(count + 1);
            setcount((prev) => prev + 1);
            // setcount((prev) => return prev + 1); 와 동일
            }}>Add</button>
    </div>
    )
    // setcount 호출하게 되면 내부상태가 변경되고, 내부가 변경이 될때마다 리액트는 변경되는 컴포넌트를 다시 호출한다
    // useState(0) 아무리 다시 호출이 되어도 값을 기억하기 떄문에 증가된 값을 기억할수가있다
    // 콜백함수로 지정하는것이 더 안전하다
}
