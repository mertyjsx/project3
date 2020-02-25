import React from "react"
import "../buttoncomponent/buttoncomponent.scss"


const Button=({children,isGoogleSignIn,onClick,inverted})=>(


<button onClick={onClick}  className={`${inverted?"inverted":""}${isGoogleSignIn?"google":""} custom-button`}>

{children}

</button>


)
export default Button