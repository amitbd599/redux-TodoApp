import Swal from "sweetalert2"
import { RemoveTodo } from "../../redux/state/Todo/TodoSlice"
import Store from "../../redux/store/Store"

export const TodoDeleteAlert =(index)=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Store.dispatch(RemoveTodo(index))
        }
      })
}