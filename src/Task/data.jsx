import DisplayCard from "./display"
import goutham from "./goutham.jpg"
import nikhil from "./nikhil.png"
let CardDetails = ()=>{

    let details=[
        {name:'Goutham',age:25,city:'Hyd',src:goutham},{name:'Nikhil',age:24,city:'Hyd',src:nikhil}
    ]
    return(
        <div>
            <DisplayCard data={details}></DisplayCard>
        </div>
    )
}
export default CardDetails;