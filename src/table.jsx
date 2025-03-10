import React from "react";

let  Table=(cols)=>{
    console.log(cols);
    
    return(
         <div>
            <table border={'2px'}>
                <thead>
                    <tr >
                        {cols.cols.map((element,i)=>{
                            return <th key={i}>{element}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {cols.users.map((element,i)=>{
                        return(
                            <tr key={i}>
                                {element.map((e,i)=>{
                                    return <td key={i}>{e}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Table;