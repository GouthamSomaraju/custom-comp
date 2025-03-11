import DisplayCard from "./display"
import goutham from "./goutham.jpg"

let CardDetails = ()=>{

    let details=[
        {name:'Goutham',age:25,city:'Hyd',src:goutham},{name:'King',age:24,city:'Hyd',src:goutham}
    ]
    return(
        <div>
            <DisplayCard data={details}></DisplayCard>
        </div>
    )
}
export default CardDetails;