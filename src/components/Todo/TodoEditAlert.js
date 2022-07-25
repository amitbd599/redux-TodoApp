import Swal from "sweetalert2";
import { EditTodo } from "../../redux/state/Todo/TodoSlice";
import Store from "../../redux/store/Store";

export const TodoEditAlert = (item, index) => {
  Swal.fire({
    title: "Are you sure?",
    input: "text",
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        Store.dispatch(EditTodo({ index: index, task: value }));
      }
    },
  });
};
