import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setCustom,
} from "../redux/state/Counter/CounterSlice";

const Counter = () => {
  const myNum = useRef();
  const count = useSelector((state) => state.Counter.value);
  const dispathch = useDispatch();
  return (
    <>
      <div className="card text-left">
        <div className="card-header bg-secondary">
          <h4 className="text-white">My Counter App</h4>
        </div>
        <div className="card-body">
          <h2>{count}</h2>

          <div className="my-4">
            <button
              className="btn btn-danger"
              onClick={() => dispathch(decrement())}
            >
              Decrease
            </button>
            <button
              className="btn mx-2 btn-success"
              onClick={() => dispathch(increment())}
            >
              Increase
            </button>
          </div>
          <div className="my-4">
            <input
              className="form-control w-50 my-2"
              type="number"
              name=""
              id=""
              ref={myNum}
            />
            <button
              className="btn btn-dark w-50 my-2 "
              onClick={() => dispathch(setCustom(myNum.current.value))}
            >
              Set Custom
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
