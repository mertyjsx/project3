import React from "react"
import { Link } from "react-router-dom"
import "../header/header.scss"
import Dropdown  from "../card-dropdown/dropdown"
import { connect } from "react-redux"
import { FaAtom } from "react-icons/fa"
import { auth } from "../../firebase/firebase.util"
import CardIcon from "../card-icon/cardicon"
import {Selectuser} from "../selector/userselector"
import {Ishidden} from "../selector/cardselector"
const Header = (props) => (



    <div className="header-container">
        <Link className="icon" to="/"><FaAtom /></Link>

        <div className="option">
            <Link className="optionlink" to="/">about</Link>
            <Link className="optionlink" to="/ShopPage">shop</Link>
            {
                props.currentuser ? (<div className={"optionlink"} onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className="optionlink" to={"/SignPage"}>SIGN IN</Link>)


            }
            <CardIcon />


        </div>

{props.isHidden ? null : <Dropdown/> }




    </div>








)

const mapStateToProps = state => ({

     isHidden: Ishidden(state) ,
     currentuser: Selectuser(state)

})


export default connect(mapStateToProps)(Header)

