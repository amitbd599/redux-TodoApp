import React from "react";

import { useSelector } from "react-redux";
import { TodoDeleteAlert } from "./TodoDeleteAlert";
import { TodoEditAlert } from "./TodoEditAlert";

const TodoList = () => {
  const todoItem = useSelector((state) => state.todo.value);
  console.log(todoItem);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoItem.map((value, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => TodoEditAlert(value, index)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => TodoDeleteAlert(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
