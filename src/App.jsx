import './App.css';
import Menu from './components/menu';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './components/body/home';
import { useEffect, useState } from 'react';

export default function App() {
    let a='https://restcountries.com/v3.1/all'
    const[info,setinfo]=useState()
    useEffect(()=>{
        function hendleSend(){
            fetch(a)
            .then((response)=>{
                console.log(response);
                if (!response.ok) {
                    throw new Error('adress error') 
                }
                return response.json()    
            })  
            .then((data)=>{
                setinfo(()=>{
                    return {data}
                })    
            })
            .catch((a)=> console.log(a))
        }
        hendleSend()
    },[a])
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