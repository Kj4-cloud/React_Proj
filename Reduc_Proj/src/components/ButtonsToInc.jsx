import { useDispatch } from "react-redux";

export const ButtonUse = () => {
  const dispactch = useDispatch();

  const onclickdecrement = () => {
    dispactch({type: "DECREMENT"});
  };

  const onclickincrement = () => {
        dispactch({type: "INCREMENT"});

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
    </>
  );
};
