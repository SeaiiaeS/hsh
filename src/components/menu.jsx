import { Home,ContactPhone,People,} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import Li from './menu_li';
export default function Menu() {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    },[]);
    console.log(offset);
    return(
        <nav>
            <input type="checkbox" id='burger' />
            <label htmlFor='burger'>&nbsp;&nbsp;<MenuIcon/>&nbsp;<span>Menu</span></label>
            <div className={offset > 646 ?'weat':null}></div>
            <ul className='ul1'>
                <Li to="/" icon={<Home/>} child='Home' />
                <Li to="contacts" icon={<ContactPhone/>} child='Contact' />
                <Li to="about" icon={<People/>} child='About Us' /> 
                <Li to="home" child='Sign In' class='signin'/>
                <Li to="home" child='Sign Up' class='signup'/>
            </ul>
        </nav>
         )
    // <nav class="navbar">
    //     <div class="logo">MUO</div>
    //     <ul class="nav-links">
    //         <input type="checkbox" id="checkbox_toggle" />
    //         <label for="checkbox_toggle" class="hamburger">&#9776;</label>
    //         <div class="menu">
    //             <li><a href="/">Home</a></li>
    //             <li><a href="/">About</a></li>
    //             <li class="services">
    //                 <a href="/">Services</a>
    //                 <ul class="dropdown">
    //                     <li><a href="/">Dropdown 1 </a></li>
    //                     <li><a href="/">Dropdown 2</a></li>
    //                     <li><a href="/">Dropdown 2</a></li>
    //                     <li><a href="/">Dropdown 3</a></li>
    //                     <li><a href="/">Dropdown 4</a></li>
    //                 </ul>
    //             </li>
    //             <li><a href="/">Pricing</a></li>
    //             <li><a href="/">Contact</a></li>
    //         </div>
    //     </ul>
    // </nav> 
    
}


