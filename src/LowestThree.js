import React, {useState} from 'react';

export default function LowestThree() {
  const [lowestThree, setLowestThree] = useState([]);

  const getLowestThreeNums = async () => {
    // using the proxy set in package.json to prevent CORS error
    let res = await fetch('/screen/string.txt');
    let text = await res.text();
    let unsortedDataArray = text.split(/\r?\n/);

    // Maps and filters the data simultaneously. If !isNaN(parseInt(data))
    // evaluates to true, that indicates that the element does not contain
    // letters. If the current element des not contain letters, it is kept
    // and added to the dataElements array as an integer. If it does contain
    // letters, it is not added to the array.
    let dataElements = unsortedDataArray.flatMap((data) => {
        return !isNaN(parseInt(data)) ? [parseInt(data)] : [];
    })

    dataElements.sort((a, b) => a - b);

    // Creates a new Set with the array which removes the duplicates
    // because sets can only have unique values. The spread operator is
    // then used to convert the unique values back into an array.
    dataElements = [...new Set(dataElements)];

    setLowestThree(dataElements.slice(0, 3)); 
  }

  const reset = () => {
    setLowestThree([]);
  }

  if(!lowestThree.length) {
    return (
      <button className="get-data" onClick={() => getLowestThreeNums()}>Get Lowest Three</button>
    )
  } else {
    return (
      <div>
        <h1>Thank you for your time!</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {lowestThree.map(num => <h1 key={num} style={{borderStyle: 'groove', margin: 20, padding: 10}}>{num}</h1>)}
        </div>
        <button onClick={() => reset()} style={{fontSize: 15, borderRadius: 5}}>Reset</button>
      </div>
    )
  }
  
}