import styles from './FoodInput.module.css'

function FoodInput ({handleOnKeyDown}){

  return(
<>

    <input type="text" 
    className={styles.FoodInput}
    placeholder='Enter Food Iteam that you need'
    onKeyDown={handleOnKeyDown} />
    {/* <button  className={styles.Button_Input_Add} >Add To list</button> */}

</>    
  );
};
   
export default  FoodInput;