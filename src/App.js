import React,{useEffect, useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import Tooltip from '@mui/material/Tooltip';


function App() {
  let [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = `You click me ${count}`;
  },[count])
  let Fun = (e) =>{
    console.log(e.target.id)
    if(e.target.id === "1" ||e.target.id === "11")
    {
      setCount(count +1);
    }
    else if(e.target.id === "2" ||e.target.id === "aa")
    {
      if(count !== 0)
      {
        setCount(count -1);
      }
      else{
        alert("Already 0")
      }
    }
    
  }
  return (
    <main>
      <div className="inner">
        <div className="num">
          {count}
        </div>
        <div className="btn">
        <Tooltip title="ADD">
        <Button variant="contained" id="1" onClick={Fun} color="success">
          <ControlPointIcon id="11" />
        </Button>
        </Tooltip>
        <Tooltip title="Delete">
        <Button variant="contained" id="2" onClick={Fun} onClick={Fun} color="error">
          <DeleteForeverTwoToneIcon id="aa"/>
        </Button>
        </Tooltip>
        </div>
      </div> 
      
    </main>
  );
}

export default App;
