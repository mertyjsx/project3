import React from "react"
import "./menulist.scss"
import {withRouter} from "react-router-dom"
const MenuItem = (props) => (

    <div className={`menu-item  ${props.size}` } onClick={()=>{props.history.push(`ShopPage/${props.linkurl}`)}}  >
        <div className="background-image" style={{ backgroundImage: `url(${props.image})` }} />

        <div className="content" style={{fontFamily :'Acme'}}>
            <h1 className="title">{props.name}</h1>
            <span className="subtitle">Satın Al</span>
        </div>

    </div>




)
export default withRouter(MenuItem)