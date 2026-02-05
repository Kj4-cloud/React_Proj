import { useSelector } from "react-redux";
export const Header= ()=>{
const  counter = useSelector(store => store.counter);
  return(
  <>
     <h1>This is counter Value {counter}</h1>
  </>
  )
}