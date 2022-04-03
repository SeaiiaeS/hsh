import { Home,ContactPhone,People,} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import Li from './menu_li';
export default function Menu() {
    return(
        <nav>
            <input type="checkbox" id='burger' />
            <label htmlFor='burger'>&nbsp;&nbsp;<MenuIcon/>&nbsp;<span>Menu</span></label>
            <ul className='ul1'>
                <Li to="/" icon={<Home/>} child='Home'/>
                <Li to="contacts" icon={<ContactPhone/>} child='Contact'/>
                <Li to="about" icon={<People/>} child='About Us'/> 
                <Li to="home" child='Sign In' class='signin'/>
                <Li to="home" child='Sign Up' class='signup'/>
            </ul>
        </nav>
         )
}


