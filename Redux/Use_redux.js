const redux = require('redux');

const INITIAL_VALUE ={
  counter:0,
  test:1
}

const reducer = (store = INITIAL_VALUE,action) =>{
 let newStore = store ;
 if(action.type === 'INCREMENT'){
   newStore = {counter:store.counter + 1}
 }
 else if (action.type === 'INCREMENTELSE'){
    newStore={
       test:store.test + 3
    }
 }
   
  return newStore ;
}

const store = redux.createStore(reducer);

const subscribe = ()=>{
  const state =store.getState();
  console.log(state);
}
store.subscribe(subscribe);

store.dispatch({type:'INCREMENTT'});
store.dispatch({type:'INCREMENTELSE'})