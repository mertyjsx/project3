import React from "react"
import "../carditem/carditem.scss"


export const Carditem=(props)=>{

const {imageUrl,name,price,quantity}=props.item

return(<div className="cart-item">
<img src={imageUrl} alt="" className="img"/>
<div className="item-details">
    <span className="name">{name}</span>
    <span className="price">{quantity}x{price}</span>
</div>



</div>)





}
