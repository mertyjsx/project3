import {createSelector} from "reselect"


const userreducer = state => state.user


export const Selectuser= createSelector(

[userreducer], user=>user.currentuser

) 