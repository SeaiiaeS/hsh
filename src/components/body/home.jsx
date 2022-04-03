import { useNavigate } from 'react-router-dom'
import img1 from '../../img/2.jpg'
import SearchCountry from './SearchCountry'


export default function Home(props) {
  const navigate =useNavigate()
  return (
      <div className="home_conteiner">
        <img style={{zIndex:1,minWidth:'1000px'}} src={img1} alt="" width='100%' height='700px' />
        <div className='discover_conteiner'>
          <h1>Discover</h1>
            <h3>The World</h3>
            <button onClick={()=>navigate('/signup')}>Discover <br/> Now!</button>
        </div>
        <SearchCountry info={props.info} />
      </div>
    )
}
