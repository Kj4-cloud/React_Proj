import { MdDelete } from "react-icons/md";
import {TodoItemsContext} from '../src/store/todo-item-store'
import { useContext } from "react";


function ToDoIteams({ todoitem, todoDate}) {


  const {removeItem} = useContext(TodoItemsContext)
  
  return (
    <center className="todo-container">
      <div className="container">
        <div className="row">
          <div className="col">{todoitem}</div>
          <div className="col">{todoDate}</div>
          <div className="col">
            <button type="button" className="btn btn-danger DeleteButton"  
            onClick={()=>removeItem(todoitem,todoDate)}
            >
             <MdDelete />

            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default ToDoIteams;
