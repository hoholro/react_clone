import "./App.css";
import Profile from './components/Profile';


export default function AppProfile() {
  return (
  <>
  <Profile 
  image='https://i.pinimg.com/474x/3f/11/75/3f1175afc799a71c207bd8538e53d1c8.jpg'
  name ='수경수'
  title ='대부자 개발자'
  isNew={true}
  />

  <Profile 
  image='https://i.pinimg.com/564x/36/64/53/366453ba86e4ca63658260482886473d.jpg'
  name ='abc'
  title ='부자부자부자'
  />
  
  <Profile 
  image='https://i.pinimg.com/564x/d2/ff/56/d2ff56f121284c9f960d1bc5aa1df52b.jpg'
  name ='abc'
  title ='천수를 누릴수 있는 부자'
  isNew={true}
  />
  </>
  );
}
