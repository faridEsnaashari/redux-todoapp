import React from "react";
import store from "../redux/store";
const Card = ({ text, id }) => {
  const remove = (id) => {
    store.dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{text}</h5>

        <a onClick={() => remove(id)} className="btn btn-danger">
          Remove
        </a>
      
      </div>
    </div>
  );
};

export default Card;
