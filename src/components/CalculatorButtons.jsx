import React from 'react';
import Players from './Players';

function CalculatorButton({calculation , calculationFunc, myOnclick}) {
    return (
     <div>

<button onClick={calculationFunc || myOnclick} >

{calculation}
</button>


    </div>
    );
}
export default CalculatorButton;