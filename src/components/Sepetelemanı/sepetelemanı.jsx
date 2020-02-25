import React from "react"
import "./sepetelemanı.scss"
import {connect} from "react-redux"
import {Actionremoveitem,Decreaseitem} from "../../redux/dropdown/dropreducer"
import {Actionaddıtem} from "../../redux/dropdown/action"
const Sepetelemanı = (props) => {
    const { imageUrl, name, price, quantity } = props.item

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" className="img" />

            </div>
            <span className="name">{name}</span>
            <span className="quantity">
        <div className="arrow" onClick={()=>props.decreaseitem(props.item)}>&#10094;</div>        
                
                
            <span className="value">{quantity}</span>
                
                
                <div className="arrow" onClick={()=>props.actionadditem(props.item)}>&#10095;</div>
                
        </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>props.removeitem(props.item)}> &#10005;</div>
        </div>





    )





}

const setstate=dispatch=>(

{
    actionadditem: item=>dispatch(Actionaddıtem(item)),
decreaseitem: item=>dispatch(Decreaseitem(item)),
    removeitem: item=>dispatch(Actionremoveitem(item))
}

)

export default connect(null,setstate)(Sepetelemanı)