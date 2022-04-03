import { useState } from "react"
import Countrys from './coutrys'
export default function SearchCountry(props) {
    const [Arr, setArr] = useState(true)
    const arr=props.info
    function Filter(event) {
     let val =event.target.value
     if (val==='') {
       return setArr(true)
     }
     let filterarr=arr.data.filter((e)=>{
       return e.name.common.toLowerCase().includes(val.toLowerCase()) 
     })
     setArr(filterarr)
    }
    return(
    <div className='countrys_container'>
          <input placeholder='Search Country...'  onChange={Filter} />
          <div className='countrys_flexbox'>
            {Arr === true ?
            <h1>Search Country...</h1>
            :
            Arr.length > 0?
            Arr.map((e,i)=>{
              return(
                <Countrys key={i} img={e.flags.png} country={e.name.common} map={e.maps.googleMaps}  />
              )
            })
            :
            <h1>Not found...</h1>
            } 
          </div>
    </div>
    )
}