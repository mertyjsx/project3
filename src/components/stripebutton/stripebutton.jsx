import React from "react"
import  StripeCheckout from "react-stripe-checkout"

export const Stripebutton=(props)=>{
const priceforstripe=props.price*100
const key="pk_test_YzIzKGTcUKh3KtKQQPpxefXY00Fd0LDUAt"

return(

<StripeCheckout

label="Pay Now"
name="Clothing Ltd"
billingAddress
shippingAddress
description={`your total is ${props.price}`}
amount={priceforstripe}
panelLabel="pay now"
token={token=>alert("payment succesful")}
stripeKey={key}
/>


)





}