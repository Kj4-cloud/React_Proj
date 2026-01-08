import styles from './ButtonContainer.module.css'

const DisplayButton =({handleOnClick})=>{

   const Buttons =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','.','0'];

  return (
    <div className="buttons-container">
      {Buttons.map((item, index) => (
        <button key={index} className={`${styles.Button_color}   `}
          onClick={()=>handleOnClick(item)}
        
        >
          {item}
        </button>
      ))}
      
    </div>
  );

} 
export default DisplayButton;