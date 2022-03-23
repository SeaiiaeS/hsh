import './App.css';
import Menu from './components/menu';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './components/body/home';


export default function App() {
    return(
        <div className='div1'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}