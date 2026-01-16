
import To_do from "./To_do";
import DisplayItem from "./itemDisplay";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";
import {TodoItemsContextProvider} from "./store/todo-item-store";

function App() {
  return (
    <>
    <TodoItemsContextProvider>
      <To_do />
      <WelcomeMessage></WelcomeMessage>
      <DisplayItem />
    </TodoItemsContextProvider>  
    </>
  );
}

export default App;