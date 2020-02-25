import {createSelector} from "reselect"


const directoryreducer=state=> state.directoryreducer 

export const directoryitems=createSelector(
[directoryreducer],

directoryreducer=>directoryreducer.items


)