import {createStore} from 'redux' ;


const INITIAL_VALUE ={
  counter:0,
  privecy:false
}

 const ReduceStore=(store = INITIAL_VALUE,action)=>{

  if(action.type === "INCREMENT"){
   return {...store, counter : store.counter +1}
  }
  else if(action.type === "DECREMENT"){
     return{ ...store,counter : store.counter - 1}
  }

   else if(action.type === 'Add_INPUT'){
          return{ ...store,counter : store.counter + Number(action.payload.num)}
   }

   else if(action.type === 'SUB_INPUT'){
      return{ ...store,counter : store.counter - Number(action.payload.num)}
   }

  else if(action.type === 'PRIVECT_ADD'){
      return{...store,privecy:!store.privecy}
   }

return store ;

}

export const counterStore =createStore(ReduceStore);