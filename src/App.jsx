import { useState } from 'react';
import './App.css';

function App() {
  const [order, setOrder] = useState([]);
  const [equipment, setEquipment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(equipment);
    setOrder((prevOrder) => [...prevOrder, equipment]);
    setEquipment('');
  }

  return (
    <div>
      <h1>R2R Order</h1>
      <ol>
        {order.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <h2>Equipment: {equipment}</h2>
        <label>Equipment number </label>
        <input
          type="text"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
