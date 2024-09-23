import { useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterredPlayerName] = useState('');
const [submit, setSubmit] = useState(false)
  const handleChange = (event) => {
    setSubmit(false);
    setEnterredPlayerName(event.target.value)
  }
  
  const handleClick = () => {
    setSubmit(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? enterPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
