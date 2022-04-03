import './App.css';
import Menu from './components/menu';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './components/body/home';
import useFetch from './hooks/useFetch';

export default function App() {
    let a='https://restcountries.com/v3.1/all'
    const[info]=useFetch(a)
    console.log(info);
    return(
        <div className='div1'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home info={info}/>}/>
                </Routes>
            </Router>
        </div>
    )
}