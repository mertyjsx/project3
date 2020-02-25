import React from "react"
import { connect } from "react-redux"
import { selectclothes } from "../selector/collectionselector"
import Collectionitem from "../collection-item/collectionitem"
import "./clothes.scss"
const Clothes = (props) => {
    console.log("naber")
    console.log(props.clothes)

    return (
        <div className="collection-page">
            <h2 className="title">{props.clothes.title}</h2>
            <div className="items">
                {props.clothes.items.map(item => <Collectionitem key={item.id} item={item}></Collectionitem>)}
            </div>
        </div>
    )



}



const statetoprops = (state, ownprops) => {
    console.log("naber")

    return {
        clothes: selectclothes(ownprops.match.params.getname)(state)
    }
}


export default connect(statetoprops)(Clothes)