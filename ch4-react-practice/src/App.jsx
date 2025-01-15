import './App.css';
import Say from './component/Say';
import EventPractice from './component/EventPractice';
import EventPractice2 from './component/EventPractice2';
import EventPractice3 from './component/EventPractice3';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';

function App() {
  return (
    <>
      <h1 className="react">ch4 이벤트 핸들러</h1>
      {/* <Say />
      <EventPractice />
      <EventPractice2 />
      <EventPractice3 /> */}
      <LogIn />
      <SignUp />
    </>
  );
}

export default App;
