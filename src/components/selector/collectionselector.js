import {createSelector} from "reselect"
import collectionitem from "../collection-item/collectionitem"


const collectionreducer=state=>state.collectionreducer


export const collectionitems=createSelector(

    [collectionreducer],
    collectionreducer=>collectionreducer.SHOP_DATA
)
export const selectforpreview=createSelector(
[collectionitems],

clothes=>Object.keys(clothes).map(key=>clothes[key])

)

export const selectclothes =clothesname=> createSelector(

[collectionitems],
clothes=>clothes[clothesname]



)