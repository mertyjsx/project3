import React from "react"
import {auth,firestore} from "../../firebase/firebase.util"
import {Route} from "react-router-dom"
import CollectionPreview from "../../components/collection-preview/collectionpre"
import {connect} from "react-redux"
import {convert} from "../../firebase/firebase.util"
import {collectionitems} from "../../components/selector/collectionselector"
import  clothespage from "../../components/clothes/clothes"
import previewpage from "../../components/Previewpage/previewpage"
import {Actioncollection} from "../../redux/collection/collectionreducer" 
class ShopPage extends React.Component{

unsubscribe=null;

componentDidMount() {
    const collectionref=firestore.collection("collections")
   this.unsubscribe= collectionref.onSnapshot( async snapshot=>{

const collectionsmap=convert(snapshot)
this.props.collectionupdate(collectionsmap)
   }



    )


}




render(){

return(

<div>
<Route exact path={`${this.props.match.path}`} component={previewpage} />
<Route path={`${this.props.match.path}/:getname`} component={clothespage} />
</div>

















)




}










}
const statetoprops=state=>(
{

collection: collectionitems(state)

}


)

const propsdispatch=dispatch=>({

collectionupdate: collection=>{dispatch(Actioncollection(collection))}

})



export default connect(statetoprops,propsdispatch)(ShopPage)