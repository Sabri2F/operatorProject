import React, { useState } from 'react';

function Plate() {

    const [inputs, setInputs] = useState([]);

    const addInput = () => {
    setInputs([...inputs, <div>
        <input placeholder='newArg' key={inputs.length} />
        <select>
        <option>true</option>
        <option>false</option>
    </select>
        </div>]);
    }

    const [selectedOption, setSelectedOption] = useState('');

    const handleReset = () => {
    setSelectedOption('');
    }



// const dropdown = document.getElementById('my-dropdown');
// dropdown.addEventListener('change', function() {
//   const selectedOptio = dropdown.value;
//   if (selectedOptio === 'constant') {
//     dropdown.innerHTML = `
//       <option value="true">True</option>
//       <option value="false">False</option>`}
//     `;
//   } else if (selectedOption === 'argument') {
//     dropdown.innerHTML = `
//       <option value="argument1">Argument 1</option>
//       <option value="argument2">Argument 2</option>
//       <option value="argument3">Argument 3</option>
//     `;
//   }
// });



    return (
        <div>
            <div>
                <input placeholder="My Arg"></input>
    <select>
        <option>true</option>
        <option>false</option>
    </select>
    

    </div>
    <div>
    {inputs.map(input => input)}
    </div>
    <div>
    <button value="" onClick={addInput}> + add arg </button>
    </div>
    
    <div>
    <select id='my-dropdown' value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}>
        <option placeholder='select' value=''>select</option>
        <option value='constant'>constant</option>
        <option value='argument'>argument</option>
        <option>and</option>
        <option>or</option>
    </select>
    <button value="" onClick={handleReset}> Reset </button>

    </div>

    <div>
        <h2>result: </h2>
        {<p>true</p>?true:<p>false</p>}
    </div>
    
        </div>

    );
}

export default Plate;