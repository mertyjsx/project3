export const Addtocard =(Array,newitem)=>{

const isinclude = Array.find(item=>item.id===newitem.id)
if(isinclude){

 return Array.map(item=>
    item.id===newitem.id?
    {...newitem,quantity:item.quantity+1}
    :item
    
    )



}
else return [...Array,{...newitem, quantity:1}]

 }


export const decreaseItem=(Items,itemtodecrease)=>{
if(itemtodecrease.quantity===1){

return Items.filter(item=>item.id!==itemtodecrease.id)

}
else {

return Items.map(item=>item.id===itemtodecrease.id?{...item, quantity:item.quantity-1}:item)

}





}











