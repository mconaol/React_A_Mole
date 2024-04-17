import React from 'react'; 
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer(props){
    const moleComponents = [];

    // Nine Mole Containers
    for(let i = 0; i < 9; i++){
        // Random Selector
        const isMole = Math.random() < 0.5;

        if (isMole) {
            moleComponents.push(
                <Mole key={i} setDisplayMole={props.setDisplayMole} handleClick={props.handleClick}/>
            );
        } else {
            moleComponents.push(
                <EmptySlot key={i} setDisplayMole={props.setDisplayMole} handleClick={props.handleClick}/>
            );
        }
    }
    return(
        <div>
            {moleComponents}
        </div>
    );
}

export default MoleContainer; 
