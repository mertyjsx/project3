import React from "react"
import "../card-dropdown/dropdown.scss"
import {Actiondrop} from "../../redux/dropdown/dropreducer"
import ButtonC from "../buttoncomponent/buttoncomponent"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {Carditem} from "../carditem/carditem"
import {Items,Ishidden} from "../selector/cardselector"
const Dropdown = (props) => (

<div className="cart-dropdown">
<div className="cart-items">

{props.itemarrays.map(item=><Carditem key={item.key} item={item}></Carditem>)}


</div>
<ButtonC className={"button"} 
onClick={()=>{
    props.history.push("/Sepetim");
props.toggle();

}}>Sepete Git</ButtonC>

</div>




)

const statetoprops=state=>(
{

itemarrays: Items(state),


}

)
const setstate = dispatch=>(
    {
        toggle :()=> dispatch(Actiondrop())
    }
)

export default withRouter(connect(statetoprops,setstate)(Dropdown))