import { useRef } from "react";
import { useDispatch } from "react-redux";

export const ButtonUse = () => {
  const dispactch = useDispatch();
  const InputElement = useRef();

  const onclickdecrement = () => {
    dispactch({ type: "DECREMENT" });
  };

  const onclickincrement = () => {
    dispactch({ type: "INCREMENT" });
  };

  const AddTheInput = () => {
    dispactch({
      type: "Add_INPUT",
      payload: { num: InputElement.current.value },
    });
    InputElement.current.value = "";
  };

  const SubTheInput = () => {
    dispactch({
      type: "SUB_INPUT",
      payload: { num: InputElement.current.value },
    });
    InputElement.current.value = "";
  };

  const Privecy = ()=>{
   dispactch({
    type:'PRIVECT_ADD'
   })
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onclickincrement}
      >
        +1
      </button>

      <button
        type="button"
        className="btn btn-secondary incrementButton  "
        onClick={onclickdecrement}
      >
        -1
      </button>

      <button
        type="button"
        className="btn btn-warning incrementButton  "
        onClick={Privecy}
      >
        Privecy
      </button>

      <br></br>

      <input
        type="text"
        className="InputFiled"
        ref={InputElement}
        placeholder="Input the number"
      />

      <button
        type="button"
        className="incrementButton btn btn-success "
        onClick={AddTheInput}
      >
        ADD
      </button>

      <button
        type="button"
        className="btn btn-danger incrementButton  "
        onClick={SubTheInput}
      >
        SUB
      </button>
    </>
  );
};
