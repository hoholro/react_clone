import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

export default function AppProfile() {
  const hanleClick = (event) => {
    console.log(event);
    alert("버튼버튼");
  };
  return (
    <>
      <button onClick={hanleClick}>수경수버튼</button>

      <Avatar
        image="https://i.pinimg.com/564x/1f/d3/03/1fd3036613cfff7d62a8e8eb3c55f10e.jpg"
        isNew={true}
      />
      <Profile
        image="https://i.pinimg.com/474x/3f/11/75/3f1175afc799a71c207bd8538e53d1c8.jpg"
        name="수경수"
        title="대부자 개발자"
        isNew={true}
      />

      <Profile
        image="https://i.pinimg.com/564x/36/64/53/366453ba86e4ca63658260482886473d.jpg"
        name="abc"
        title="부자부자부자"
      />

      <Profile
        image="https://i.pinimg.com/564x/d2/ff/56/d2ff56f121284c9f960d1bc5aa1df52b.jpg"
        name="abc"
        title="천수를 누릴수 있는 부자"
        isNew={true}
      />

      <Profile
        image="https://i.pinimg.com/564x/66/47/33/664733f20e70d1a141ccf4409ec6970b.jpg"
        name="수경수"
        title="대부자개발자"
      />
    </>
  );
}
