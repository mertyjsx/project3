import React from "react"
import "./directory.scss"
import MenuList from ".././menu-list/menulist.component"
import { directoryitems } from "../selector/directoryselector"
import {connect} from "react-redux"
 class Directory extends React.Component{
render(){
return(

<div className="directory-menu">

{this.props.directoryitems.map(item=>(

<MenuList  name={item.title}  key={item.id} image={item.imageUrl}  size={item.size} linkurl={item.linkurl}   />

))}

</div>

)

}


}
const statetoprops=state=>(

{
directoryitems:directoryitems(state)

}


)

export default connect(statetoprops)(Directory)