import { useEffect, useState } from "react"
import './App.css'
import gif from './zaWarudo.gif';

function Time() {
    const[time, setTime] = useState(0);


    useEffect(()=>{
        const interval = setInterval(()=>{
            if(time<10){
                setTime(time+1);
            }else{
                clearInterval(interval);
                document.body.classList.add('time');
                let h2 = document.createElement('h2');
                h2.innerHTML = 'ZA WARUDO !!!';
                h2.classList.add('big');
                document.querySelector('.countSeconds').appendChild(h2);
                let image = document.createElement('img')
                image.setAttribute("src",gif)
                image.setAttribute("alt","za warudo")
                document.querySelector('.countSeconds').appendChild(image)
              
            }
            
        }, 1000)
        
        return()=>clearInterval(interval);
    })
     
    
  return (
    <>
    <section className="countSeconds"> 
        <p>{time}</p>
       
    </section>
   

    </>
  )
}

export default Time