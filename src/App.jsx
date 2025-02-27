import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>R2R Order</h1>

      <form>
        <h2>Equipment</h2>
        <label>Equipment number </label>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
