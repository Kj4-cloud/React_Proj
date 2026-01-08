import {TodoItemsContext} from '../src/store/todo-item-store'
import { useContext } from "react";


const WelcomeMessage = () => {
 
     const contextObj = useContext(TodoItemsContext);
  const todoContant =contextObj.todoContant;

  return (
    <center>
                     {todoContant.length==0 && <h2>Welcome Add Your ToDo Task</h2>}
    </center>
  );
};

export default WelcomeMessage;