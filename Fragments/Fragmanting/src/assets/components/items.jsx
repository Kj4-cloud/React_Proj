import style from "./items.module.css";


// const Item =({food})=>{
//   return (
//     <li  className="list-group-item">{food}</li>
//   );
// };
// export default Item;
// do with boath the method


function Item({ food,bought,handleBuyButton }) {

   function Buying_item(){
         console.log(`you are brouthing this ${food}`)
         
   }

  return (
    <li className={`list-group-item  js_food_name     ${bought && "active"}`}>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">{food}</div>
          <div className="col">
            <button className={style.Buy_Button}
            onClick={handleBuyButton}
            >Buy</button>
          </div>
        </div>
      </div>
    </li>
  );
}
export default Item;
