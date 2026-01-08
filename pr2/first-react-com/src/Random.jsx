function RandomNum (){
  let number = Math.random()*100;
  return <h1  style={{'background-color': 'lightblue'}} >Random NUmber: {Math.round(number)} </h1>
  
}

export default RandomNum;