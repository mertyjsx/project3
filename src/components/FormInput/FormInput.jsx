import React from "react"
import "../FormInput/FormInput.scss"

const FormInput = ({label,value,handlechange,...others}) => (

    <div className="group">
        <input  className='form-input'  onChange={handlechange} {...others}/>
        {
            label ? (
            <label className={`${value.length? 'shrink':""} form-input-label`}>
{label}
            </label>
            ) : null


        }
    </div>



)
export default FormInput