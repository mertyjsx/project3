
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Switch,Route,Redirect} from "react-router-dom"
import ShopPage from "./pages/shoppage/shoppage"
import Header from "./components/header/header"
import {setcurrentuser} from "../src/redux/user/actionuser"
import {connect} from "react-redux"
import SignPage from "./pages/sign/sign"
import {auth,Addcollections} from "./firebase/firebase.util"
import {CreateUserProfileDocument} from "./firebase/firebase.util"
import Sepetim from "../src/pages/sepetim/sepetim"
import {selectforpreview} from "../src/components/selector/collectionselector"
class App extends React.Component{



Fb=null

componentDidMount() {
const { setcurrentuser} =this.props
//bir kere giriyo sürekli kontrol ediyo
this.Fb=auth.onAuthStateChanged(async (userAuth)=>{
if(userAuth){
const userDoc= await CreateUserProfileDocument(userAuth)

userDoc.onSnapshot((snap)=>{

setcurrentuser({

id:snap.id,
...snap.data()



})



});}
else{

    setcurrentuser(userAuth)
}



}) 

}
componentWillUnmount(){
this.Fb()

console.log("kapandı")

}





    render(){




    return(

<div>
<Header/>




<Switch>
<Route exact  path="/" component={HomePage}  />

<Route exact path="/Sepetim" component={Sepetim}   />
<Route path="/ShopPage" component={ShopPage}   />
<Route exact path="/SignPage" render={()=>(

this.props.currentuser?(<Redirect to="/"/>):(<SignPage></SignPage>)







   )}   />


</Switch>



</div>


)
}




}

const getState =(state)=>(

{
currentuser: state.user.currentuser,
collectionitems: selectforpreview(state)
}


)

const MapDispatchToProps = (dispatch)=>({


setcurrentuser: (user)=>dispatch(setcurrentuser(user))

})


export default connect(getState,MapDispatchToProps)(App)