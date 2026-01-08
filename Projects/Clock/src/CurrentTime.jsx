let CurrentTime=()=>{
  let time =new Date();
 

  return(
    <div>
      {time.toLocaleDateString()} <span></span>
      {time.toLocaleTimeString()}
      
    </div>
  );

}
export default CurrentTime;