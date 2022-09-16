
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';

function App() {
  const [backColor,setBackColor]=useState('');
  const [chosenIndex,setChosenIndex]=useState('');
  const colorsArr=['red', 'yellow', 'pink', 'black', 'blue', 'brown','green']
  useEffect(()=>{
    handleBackground()
  },[])
  const handleBackground=(color,index)=>{
    setChosenIndex(index)
    setBackColor(color)
  }

  return (
    <>
    <div >
      <div style={{display:"flex",justifyContent:"space-evenly",alignSelf:"center"}}>
      {
        colorsArr.map((color,index)=>{
        return(
        <div key={uuid()} style={{height:"100px",width:"100px",border:`2px solid ${color}`,borderRadius:"50px",backgroundColor:index===chosenIndex &&`${backColor}`}} onClick={()=>{handleBackground(color,index)}}></div>);
      })}
      </div>
    </div>
      
    </>
    
  );
}

export default App;
