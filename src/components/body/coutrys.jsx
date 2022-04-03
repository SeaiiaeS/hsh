export default function Countrys(props) {
    return(
        <div className="countrys_box" >
            <img src={props.img} alt="" /> 
            <h4>{props.country}</h4>
            <a target='_blank' rel="noreferrer" href={props.map}><button>See On Map</button></a>
        </div>
    )
}