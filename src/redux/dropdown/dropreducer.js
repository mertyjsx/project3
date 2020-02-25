import {Addtocard,decreaseItem} from "../dropdown/func"

const INITIAL={

hidden:true,
Items: []

}

export const Actiondrop=()=>({

type:"TOGGLE_DROP"


})
export const Actionremoveitem=(item)=>(

{
type:"Removeitem",
payload:item

}

)
export const Decreaseitem=(item)=>(
{
  type:"decreaseitem",
  payload:item
}

)
    


export const Dropreducer=(state=INITIAL,action)=>{

    switch (action.type) {
        case "TOGGLE_DROP":
          return {
            ...state,
            hidden: !state.hidden
          };
        case "ADD_ITEM":
          return {
            ...state,
            Items: Addtocard(state.Items,action.payload)
          };
          case "decreaseitem":
            return{
...state,
Items: decreaseItem(state.Items,action.payload)

            };
          case "Removeitem":
            return{
...state, 
Items: state.Items.filter(item=>item.id!==action.payload.id)

            };
        default:
          return state;
      }

}