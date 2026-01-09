import { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import {TodoItemsContext} from '../src/store/todo-item-store'
import { useContext } from "react";

function To_do() {


const {addnewItem} = useContext(TodoItemsContext)

  const todoName = useRef();
  const dueDateTodo = useRef();

  const ChangeValue = (event) => {
    event.preventDefault();
    const TodoTask = todoName.current.value;
    const TodoDate = dueDateTodo.current.value;
    addnewItem(TodoTask, TodoDate);
    todoName.current.value = "";
    dueDateTodo.current.value = "";
  };

  return (
    <center className="todo-container">
      <form onSubmit={ChangeValue}>
        <h1>To-do List</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="Input_Task"
                ref={todoName}
                placeholder="Add your new todo"
              />
            </div>

            <div className="col">
              <input type="date" ref={dueDateTodo}></input>
            </div>

            <div className="col">
              <button type="submit" className="btn btn-success AddButton">
                <IoIosAddCircleOutline />
              </button>
            </div>
          </div>
        </div>
      </form>
    </center>
  );
}
export default To_do;
