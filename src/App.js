import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const heavyWork = () => {
  console.log("heavy");
  return ["홍길동", "김민지"];
}

function App() {
  const [names, setNames] = useState(()=>{
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setNames( (prevState) => {
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>upload</button>
      {names.map( (name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
