 import React, { useEffect } from 'react'
 import molehill from './Images/molehill.png'

 function EmptySlot(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() *10000)
        let timer = setTimeout(() =>{
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer);
    })

    
    return(
        <div>
            <img style={{width: '30vw'}} src={molehill} alt="molehill" onClick={props.handleClick}/>
        </div>
    )
 } ;

 export default EmptySlot 