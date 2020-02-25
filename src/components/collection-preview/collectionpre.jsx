import React from "react"
import "../collection-preview/collectionpreview.scss"
import CollectionItem from "../collection-item/collectionitem"


const CollectionPreview=(props)=>{
console.log(props.item)

return(
<div className="collection-preview">
<h1 className={"title"}>{props.item.title}</h1>
<div className={"preview"}>
{props.item.items.filter((items,index)=>index<4).map(item=>

<CollectionItem key={item.id} item={item}  />


)}

</div>




</div>







)









}

export default CollectionPreview;