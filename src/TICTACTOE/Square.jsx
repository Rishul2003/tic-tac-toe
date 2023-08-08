import React, { useState } from "react"
const Square=function({value,onClick}){
    // const [value,setvalue]=useState(0)
    return(
        <div onClick={onClick} className ="square">
            <h3>{value}</h3>
        </div>
    )
}
export default Square