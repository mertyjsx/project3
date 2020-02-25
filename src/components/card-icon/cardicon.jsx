import React from "react"
import {ReactComponent as Logo} from "../../assets/shopping-bag.svg"
import "../card-icon/cardicon.scss"
import {connect} from "react-redux"
import {Actiondrop} from "../../redux/dropdown/dropreducer"
import {Itemscount} from "../selector/cardselector"
const CardIcon =(props)=>(

<div className="cart-icon" onClick={props.toggle}>
<Logo className="shopping-icon"></Logo>
<span className="item-count">{props.itemcount}</span>
</div>




)

const PropsToState=(dispatch)=>(

{

toggle:()=>{dispatch(Actiondrop())} 

}

)
const statetoprops=state=>(

{itemcount:Itemscount(state)}

)


export default connect(statetoprops,PropsToState)(CardIcon)