import logo from './logo.svg';
import './App.css';
import React from 'react';
import ParentComponent from './Components/ParentComponent';
import Counter from './Memo-Hooks/Counter';
import FocusInput from './Ref-hook/FocusInput';
import ClassTimer from './Ref-hook/ClassTimer';
import HookTimer from './Ref-hook/HookTimer';
import DocTitleOne from './Custom-Hooks/DocTitleOne';
import DocTitleTwo from './Custom-Hooks/DocTitleTwo';
import CounterOne from './Custom-Hooks/CounterOne';
import CounterTwo from './Custom-Hooks/CounterTwo';
import UserForm from './Custom-Hooks/UserForm';


function App() {
  return (
    <div className="App">
       <ParentComponent />
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo />  */}
      {/* <CounterOne />  */}
      {/* <CounterTwo /> */}
      {/* <UserForm /> */}
      
    </div>
  );
}

export default App;
