import React, { useEffect } from 'react'; 
import mole from './Images/mole.png'

function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 8000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    }, []);

    return(
        <div>
           <img style={{width:'30vw'}} src={mole} onClick={props.handleClick}/>
        </div>
    )
}

export default Mole; 