import React, { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { AddTodo } from "../../redux/state/Todo/TodoSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <input type="text" className="form-control" ref={taskInput} />
        </div>
        <div className="col-md-2">
          <button
            onClick={() => dispatch(AddTodo(taskInput.current.value))}
            className="btn btn-primary"
          >
            Add to Do
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
