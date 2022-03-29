import Modal from "./components/Modal";
import Todo from "./components/Todo"
import Backdrop from './components/Backdrop'

function App() {
  return (
    <div>
      <h1>My todo</h1>
      <Todo text="Learn React"/>
      <Todo text="Master React"/>
      <Todo text="Explore the full React"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
