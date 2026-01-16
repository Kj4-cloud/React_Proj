import { createContext, useState } from "react"

export const TodoItemsContext = createContext({
  todoItems:[],
  addnewItem:()=>{},
  removeItem :()=>{},
});

const TodoItemsContextProvider =({children})=>{

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

  return  <TodoItemsContext.Provider
      value={{
        todoContant,
        addnewItem,
        removeItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>

 };

 export { TodoItemsContextProvider };