const Display = ({DisplayValue}) => {
  return (
    <input
      className="display"
      type="text"
      value={DisplayValue}
      readOnly
      

    ></input>
  );
};

export default Display;
