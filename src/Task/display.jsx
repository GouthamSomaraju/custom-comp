import "./DisplayCard.css";
let DisplayCard=(data)=>{
    console.log(data);
    
    return(
        <div className="card-container">
            {data.data.map((element,i)=>{
                return(
                    <div className="card" id="card" key={i}>
                        <img src={element.src} alt={element.name} className="card-img" />
                        <h1 className="card-title">{element.name}</h1>
                        <h2 className="card-subtitle">{element.city}</h2>
                        <p className="card-text">Age: {element.age}</p>
                    </div>
                )
            })}
        </div>
    )
    
}

export default DisplayCard;