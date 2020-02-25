import React from "react"
import FormInput from "../FormInput/FormInput"
import ButtonComp from "../buttoncomponent/buttoncomponent"
import {auth,CreateUserProfileDocument} from "../../firebase/firebase.util"
import "../signup/signup.scss"



export default class Signup extends React.Component{

constructor(){
super()
this.state={
display:"",
    email:"",
password:"",
confirm:"",
}


}
ChangeHandler=(event)=>{

const{name,value}=event.target

this.setState({

[name]:value

})



}
ClickHandler=async (event)=>{
event.preventDefault()
const {display,email,password,confirm}=this.state
if(password!==confirm){


    alert("Wrong Password")
    return
}


try {
    const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

        
      



await  CreateUserProfileDocument(user, {display})

this.setState({
display:"",
email:"",
password:"", 
 confirm:""


})

} catch (error) {
console.log("error while sign up")    
}




}

render(){
    //sıra önemlimi isim önemlimi
    const { display, email, password, confirm } = this.state;

return(


<div className="signup">
<h1 className="title">SIGN UP</h1>
<span className="title"></span>
<FormInput
name="display"
type="text"
value={display}
handlechange={this.ChangeHandler}
label="displayName"
/>
<FormInput
name="email"
type="email"
value={email}
handlechange={this.ChangeHandler}
label="email"
/>
<FormInput
name="password"
type="password"
value={password}
handlechange={this.ChangeHandler}
label="password"
/>
<FormInput
name="confirm"
type="password"
value={confirm}
handlechange={this.ChangeHandler}
label="Confirm Password"
/>
<ButtonComp
onClick={this.ClickHandler}
type="submit"
>SIGN UP</ButtonComp>

</div>






)



}

}
