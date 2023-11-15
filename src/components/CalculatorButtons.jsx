import React from 'react';
import Players from './Players';

function CalculatorButton({calculation , calculationFunc}) {
    return (
     <div>
<div>
<button onClick={calculationFunc}>
{calculation}
</button>
</div>
     </div>
    );
}
export default CalculatorButton;