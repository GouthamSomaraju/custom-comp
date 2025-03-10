import React from "react";

let Card=()=>{
    let data={name:'name',age:25,city:'Hyd'}
    return(
        <div>
            <h1>{data.name}</h1>
            <h1>{data.city}</h1>
            <p>{data.age}</p>
        </div>
    )
}

export default Card;