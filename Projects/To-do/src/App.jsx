import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import To_do from "./To_do";
import ToDoIteams from "./ToDoItems";
import DisplayItem from "./itemDisplay";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  const [todoContant, setToDo] = useState([]);
  const addnewItem = (todoEvent, TodoDate) => {
    setToDo([...todoContant, { name: todoEvent, dueDate: TodoDate }]);
  };

  const removeItem = (todoItemName, todoDueDate) => {
    const newItems = todoContant.filter(
      (item) => !(item.name === todoItemName && item.dueDate === todoDueDate)
    );

    setToDo(newItems);
  };

  // const defaultItems =[{name:'karan' , Duedate:'12/3/2023'}]

  return (
    <TodoItemsContext.Provider
      value={{
        todoContant,
        addnewItem,
        removeItem,
      }}
    >
      <>
        <To_do />
        <WelcomeMessage></WelcomeMessage>
        <DisplayItem />
      </>
    </TodoItemsContext.Provider>
  );
}

export default App;
