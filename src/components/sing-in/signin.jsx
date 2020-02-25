import React from "react"
import FormInput from "../FormInput/FormInput"
import "../sing-in/sign-in.scss"
import ButtonComponent from "../buttoncomponent/buttoncomponent"
import {signinwithgoogle,auth} from "../../firebase/firebase.util"
import "../../components/sing-in/sign-in.scss"
export default class Signin extends React.Component{

constructor(props){
super(props)

this.state={
email: "",
password:""


}



}

handlelogin= async (event)=>{
event.preventDefault()
const {email,password}=this.state
 try {

    console.log(email)
    console.log(password)
     await auth.signInWithEmailAndPassword(email,password);

     this.setState({email:"",password:""})

 } catch (error) {
     console.log("girmedi")
 }



}

handlechange=(e)=>{

const {name,value}=e.target

this.setState({[name]:value})


}

render(){

return(
<div className="sign-in">
<h1 >SIGN UP</h1>
<FormInput
name="email"
value={this.state.email}
label="email"
handlechange={this.handlechange}
type="email"
required
/>
<FormInput
value={this.state.password}
name="password"
label="password"
handlechange={this.handlechange}
type='password'
required

/>
<div className={"buttons"}>
<ButtonComponent onClick={this.handlelogin} type={"submit"} >CLİCK </ButtonComponent>
<ButtonComponent onClick={signinwithgoogle} isGoogleSignIn>Google ile Gir </ButtonComponent>
</div>
</div>

)


}


}