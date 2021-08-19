function Service(props){

return(
    <div className="card">
        <div className="card-img">
            <img className="card-image" src={props.image} alt={props.image}/>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <span className="card-subtitle">{props.sbtitle}</span>
        <p className="card-desc">{props.desc}</p>
        <p className="btn-parent">
            <button className="card-btn">Read More</button>
        </p>
    </div>
)

}

export default Service;