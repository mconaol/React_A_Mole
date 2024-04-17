import React, { useState } from 'react'; 
import Mole from './Mole'
import EmptySlot from './EmptySlot';

function MoleContainer(){
    const [displayMole, setDisplayMole] = useState(false);
    const[score, setScore]= useState(0)


    const handleBoppedMole = () => { 
        setScore(score + 1); //Adding +1 to score 
        setDisplayMole(false); //Resetting displayMole
    }

    return(
        <div>
           {displayMole ? (
            <Mole onClick={handleBoppedMole} />
           ) : (
            <EmptySlot/>
           )} 
        </div>
    );
}

export default MoleContainer; 