import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config={
    apiKey: "AIzaSyD7Pn3I0Dbaf-sDYpbpObkK81K4vV4fY0s",
    authDomain: "ecommerce-1c1d4.firebaseapp.com",
    databaseURL: "https://ecommerce-1c1d4.firebaseio.com",
    projectId: "ecommerce-1c1d4",
    storageBucket: "ecommerce-1c1d4.appspot.com",
    messagingSenderId: "628925421170",
    appId: "1:628925421170:web:58b06cbaa824374828d4eb",
    measurementId: "G-R3P40NZSKL"
  };

  firebase.initializeApp(config)


export const Addcollections=async (collectionkey,objectstoadd)=>{
const collectionref= firestore.collection(collectionkey)

const batch =firestore.batch();
objectstoadd.forEach(obj=>{
  const newdocred=collectionref.doc()
  batch.set(newdocred,obj)
})
return await batch.commit()
}
export const convert=(collections)=>{
const transformedcollection=collections.docs.map( doc=>{
const {title, items} = doc.data();
return{
routeName: encodeURI(title.toLowerCase()),
id:doc.id,
title,
items
}



}


)

return  transformedcollection.reduce((accumulator,collection)=>{
  accumulator[collection.title.toLowerCase()]=collection;
  return accumulator;
},{});

}

export const CreateUserProfileDocument= async (userAuth,extra)=>{
if(!userAuth) return;


  const userDoc = firestore.doc(`users/${userAuth.uid}`)
const Snapshot = await userDoc.get();

if(!Snapshot.exists){
const {displayName,email}=userAuth
const time= new Date();
try {
  
await userDoc.set({
displayName,
  time,
email,
...extra


})
console.log(userDoc)


} catch (error) {
  console.log("error when creatin userdoc")
}






}


return userDoc;








}



  export const auth= firebase.auth();
  export const firestore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({promp:"select_account"})
export const signinwithgoogle=()=> auth.signInWithPopup(provider)
export default firebase