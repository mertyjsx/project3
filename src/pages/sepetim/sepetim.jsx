import React from "react"
import "./sepetim.scss"
import {connect} from "react-redux"
import {Items,Totalcost} from "../../components/selector/cardselector"
import Sepetelemanı from "../../components/Sepetelemanı/sepetelemanı"
import {Stripebutton} from "../../components/stripebutton/stripebutton"
const Sepetim = (props) => (

    <div className="checkout-page">

        <div className="checkout-header">

            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>


{props.Items.map(item=><Sepetelemanı key={item.id} item={item}></Sepetelemanı>)}


<div className="total">TOPLAM : {props.total}</div>

<Stripebutton></Stripebutton>
    </div>





)
const statetoprops=state=>({

total: Totalcost(state),
Items: Items(state)

}) 

export default connect(statetoprops)(Sepetim)