import Nav from "./components/Nav";
import React , {useState} from 'react';

import store from "./redux/store";
import { useSelector } from "react-redux";
import Card from "./components/Card";
function App() {
  const [text, settext] = useState('');
 
  let test = store.getState()
  const addTodo = () => {
    store.dispatch({ type: "ADD_ITEM" , payload : text });
    
    
    settext('')
    
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <h1 className="text-center">Redux Todo-List</h1>
        <div className="d-flex">
        <button onClick={addTodo} className="btn btn-success p-3">
          ADD
        </button>
        <input value={text} onChange={e => settext(e.target.value)} className="form-control d-inline w-75 mx-auto" />
        </div>
        <hr />
         {test ? test.todos.map((t , index) => (
           <Card text={t.text } id={t.id} key={index} />
         )) : null}
      </div>
    </div>
  );
}

export default App;
