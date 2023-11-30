import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';


function App() {

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  
  useEffect(() => {
     console.log(`It is ${emotion} around here!`);
  }, [emotion, secondary]);
  
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title}, ${color}`);
        txtTitle.current.value = "";
        hexColor.current.value = "";
  };

  return (
    <div className="App">
    
     <h1>Current emotion is {emotion}</h1>
     <button onClick={() => setEmotion("Sad")}>Sad</button>
     <button onClick={() => setEmotion("Excited")}>Excited</button>
     <h2>Current secondary emotion is {secondary}</h2>
     <button onClick={() => setSecondary("Grateful")}>Grateful</button>
     <div>
        <br></br>
        <input
          type="checkbox"
          value = {checked}
          onChange={setChecked}
        />
        <label>{checked ? "checked" : "not checked"}</label>
     </div>
     <br></br>
      <form onSubmit={submit}>
        <input
          ref={txtTitle}
          type="text"
          placeholder="color title..."
        /> 
        <input ref={hexColor} type = "color"/>
        <button>ADD</button>
      </form>
    </div>
  ); 
}

export default App;
