import React from 'react';
import Func from './Func'

export default function App() {
  function amaan() {
    return alert('value is getting');
  }

  return (
    <div className="App">
    <Func kannu ={amaan}/>
    </div>
  );
}
