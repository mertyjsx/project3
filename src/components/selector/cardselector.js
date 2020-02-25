import {createSelector} from "reselect"


const dropreducer = state=> state.dropreducer

export const Items= createSelector(

[dropreducer], dropreducer=> dropreducer.Items

)

export const Ishidden=createSelector(
[dropreducer], dropreducer=>dropreducer.hidden

)

export const Itemscount = createSelector(
[Items], Items=> Items.reduce((count,item)=>item.quantity+count,0)


)

export const Totalcost = createSelector(

[Items] , Items => Items.reduce((toplam,item)=>toplam+(item.price*item.quantity),0)


)