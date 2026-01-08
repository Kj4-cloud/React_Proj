
function ErrorMessage ({foodName}){
  
  return (
<>
    {foodName.length==0 ?<p className="js_Error">I am empty </p>:null }

 
</>
  );
}
export default ErrorMessage ;