import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { increment, decrement, handleLoggin } from "../src/actions";

const Test = (props) => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  console.log(props.formData);
  return (
    <div className="h-[100vh] w-[100wv] grid place-items-center">
      <div>
        <h1>Counter {counter}</h1>
        <button
          onClick={() => dispatch(increment(5))}
          className="w-[100px] h-[30px] bg-blue-gray-500"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="w-[100px] h-[30px] bg-blue-gray-500 ml-5"
        >
          -
        </button>
        <div>
          <button
            onClick={() => dispatch(handleLoggin())}
            className="w-[100px] h-[30px] bg-blue-gray-500 mt-5"
          >
            Login
          </button>
          <h1>test: {userName}</h1>
        </div>
        {isLogged ? <h1>Only show when loggin is true</h1> : ""}
      </div>
    </div>
  );
};

export default Test;
