import React from "react"


import CollectionPreview from "../../components/collection-preview/collectionpre"
import {connect} from "react-redux"
import {selectforpreview} from "../../components/selector/collectionselector"

 class Previewpage extends React.Component{





render(){



return(


<div>


{this.props.collection.map(item=><CollectionPreview   key={item.id}  
item={item}/>)

}







</div>















)




}










}
const statetoprops=state=>(
{

collection: selectforpreview(state)

}


)
export default connect(statetoprops)(Previewpage)