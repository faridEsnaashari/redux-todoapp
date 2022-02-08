import Nav from "./components/Nav";
import React , {useState} from 'react';
import store from "./redux/store";

import Card from "./components/Card";
import {addItem, removeItem} from "./redux/actions";

function App() {
  const [text, settext] = useState('');
  const [reduxState, setReduxState] = useState();

  store.subscribe(() => {
      setReduxState(store.getState());
  });
 
  const removeTodo = (id) => {
    store.dispatch(removeItem(id));

    setReduxState(store.getState());
  };

  const addTodo = () => {
    store.dispatch(addItem(text));

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
         {
           reduxState && reduxState.todos && reduxState.todos.map((t , index) => (
             <Card 
               text={t.text } 
               id={t.id} 
               key={index} 
               onRemove={removeTodo}
             />
           ))
          }
      </div>
    </div>
  );
}

export default App;
