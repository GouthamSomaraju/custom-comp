import React from "react";
import Table from './table.jsx';

let  Data=()=>{
    let cols=['name','email','mobile'];
    let data=[['goutham',"goutham@gmail.com",'9087654321'],
              ['sai','sai@gmail.com','9876543210'],]
    return(
         <div>
                <Table cols={cols} users={data}/>
         </div>
    )
}

export default Data;