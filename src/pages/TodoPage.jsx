import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateTodo from "../components/Todo/CreateTodo";
import TodoList from "../components/Todo/TodoList";

const TodoPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5>My To do APP</h5>
            </div>
            <div className="card-body">
              <CreateTodo />
              <br />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
