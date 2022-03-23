export default function Countrys(props) {
    return(
        <div style={{width:'20%',height:'200px'}}>
            <img src={props.img} alt="" width='100%' heigth='180px' />
            <h4 style={{textAlign:'center'}}>{props.country}</h4>
        </div>
    )
}