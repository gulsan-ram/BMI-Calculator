
import './App.css';
import React,{useState} from 'react';

function App() {

  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');

 const calcBmi = (e) => {
    e.preventDefault(); 

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 25) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  const reload = () => {
  setWeight(0);
  setHeight(0);
  setBmi('');
  setMessage('');
};

  
  
  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs)</label>
            <input type='text' placeholder="Enter Weight value"
            value={weight} 
            onChange={(event)=> setWeight(event.target.value)}
            />

            <label>Height(in)</label>
            <input type='text' placeholder="Enter Height value" 
            value={height}
            onChange={(event)=>setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className='btn' type='submit'>SUBMIT</button>
            <button className='btn-btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
          <div className='center'>
            <h1>Your BMI is:{ bmi}</h1>
            <p>{message}</p>
          </div>

        </form>

      </div>


    </div>
  )
}

export default App;

