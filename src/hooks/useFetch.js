import { useState,useEffect } from "react"
export default function useFetch(adress) {   
    const[info,setinfo]=useState(null)
    useEffect(() => {
      function hendleSend(){
        fetch(adress)
        .then((response)=>{
            if (!response.ok) {
                throw new Error('adress error') 
            }
            return response.json()    
        })  
        .then((data)=>{
            setinfo({data})    
        })
        .catch((a)=> console.log(a)) 
    }
    hendleSend()
    console.log(1);
    }, [adress])
    return [
        info,
    ]
}