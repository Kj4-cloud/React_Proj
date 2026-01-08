import ToDoIteams from "./ToDoItems";
import {TodoItemsContext} from '../src/store/todo-item-store'
import { useContext } from "react";

function DisplayItem() {
const {todoContant} = useContext(TodoItemsContext)


  return (
    <>
      {todoContant.map((item, index) => (
        <ToDoIteams
          key={index}
          todoitem={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </>
  );
}
export default DisplayItem;
