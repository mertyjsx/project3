import React from "react"
import "../collection-item/collectionitem.scss"
import Button from "../buttoncomponent/buttoncomponent"
import {connect} from "react-redux"
import {Actionaddıtem} from "../../redux/dropdown/action"

const CollectionItem = (props) => {
const {imageUrl,name,price} = props.item;


   return (
      <div className="collection-item">
         <div className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
         />
         

         <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        
        
         </div>
         <Button inverted onClick={()=>props.additem(props.item)}>Add to List</Button>


      </div>



   )






}

const PropsToState=dispatch=>(
{

additem : item=> dispatch(Actionaddıtem(item)) 
}

)


export default connect(null,PropsToState)(CollectionItem)