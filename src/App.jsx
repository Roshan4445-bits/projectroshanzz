import './App.css';
import { useState } from 'react';
const App=()=>{
  const [show, setShow]=useState(true);
  const message=show?"Show Message":"Hide Message";
  
  const toggle=()=>{
   setShow(!show);
  }
  
 return ( 
    <div className="sub-container">
    <h1 className="heading">Toggle Example</h1>
    <button className="btn" onClick={toggle}>{message}</button>
    </div>
  )
}
export default App;