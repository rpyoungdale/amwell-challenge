import React, {useState} from 'react';

export default function LowestThree() {
  const [lowestThree, setLowestThree] = useState([]);
  const [error, setError] = useState('');

  const getLowestThreeNums = async () => {
    try {
      const res = await fetch('https://cors-anywhere.herokuapp.com/https://www.iwillfearnoevil.com/screen/string.txt');
      if(res.ok) {
        const text = await res.text();
        const unsortedDataArray = text.split(/\r?\n/);
  
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
      } else {
        throw new Error('Failed to get the data!');
      }
    } catch(e) {
      setError(e.message);
    }  
  }

  const reset = () => {
    setLowestThree([]);
    setError('');
  }

  if(error) {
    return (
      <div>
        <h1 className="error-message">{error}</h1>
        <button className="reset" onClick={() => reset()}>Reset</button>
      </div>
    )
  } else if(!lowestThree.length) {
    return (
      <div>
        <button className="get-data" onClick={() => getLowestThreeNums()}>Get Lowest Three</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Thank you for your time!</h1>
        <div className="result-container">
          {lowestThree.map(num => <h1 className="num-result" key={num}>{num}</h1>)}
        </div>
        <button className="reset" onClick={() => reset()}>Reset</button>
      </div>
    )
  }
  
}