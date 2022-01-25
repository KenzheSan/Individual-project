import { useState } from 'react';
import './App.css';
import ModalWindow from './components/UI/modal-window/ModalWindow';
import AuthForm from './components/LoginForm/AuthForm/LoginForm';
function App() {
  const [isOpen,setIsOpen] = useState(true)
  return (
    <div className="App">
     {isOpen && <ModalWindow><AuthForm/></ModalWindow>}
    </div>
  );
}

export default App;
