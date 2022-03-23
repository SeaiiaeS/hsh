import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../../img/2.jpg'
import Countrys from './coutrys'


export default function Home(props) {
  const [State, setState] = useState('')
  const [Arr, setArr] = useState([])
  const arr=props.info
  let navigate =useNavigate()
  function Filter(e) {
   setState(e.target.value)
   setArr(arr.data.filter((e)=>{
     return e.name.common.includes(State) || e.name.common.toLowerCase().includes(State)
   }))
   console.log('a');
  }
  return (
      <div className="home_conteiner">
        <img style={{zIndex:1,minWidth:'1000px'}} src={img1} alt="" width='100%' height='700px' />
        <div className='discover_conteiner'>
          <h1>Discover</h1>
            <h3>The World</h3>
            <button onClick={()=>navigate('/signup')}>Discover <br/> Now!</button>
        </div>
        <div className='countrys_container'>
          <input value={State} onChange={Filter} />
          <button onClick={Filter} >find</button>
          <div className='countrys_flexbox'>
            {Arr ?
          Arr.map((e,i)=>{
            return(
                <Countrys key={i} img={e.flags.svg} country={e.name.common}  />
            )
          }):null } 
          </div>
        </div>
      </div>
    )
}
