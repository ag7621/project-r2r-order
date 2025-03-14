import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [order, setOrder] = useState([]);
  const [truck, setTruck] = useState('');
  const [trailer, setTrailer] = useState('');

  useEffect(() => {
    console.log('order update: ', order);
  }, [order]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(truck);
    setOrder((prevOrder) => [...prevOrder, { truck: truck, trailer: trailer }]);
    setTruck('');
    setTrailer('');
  }

  return (
    <div>
      <h1>R2R Order</h1>
      <ol>
        {order.map((item, index) => (
          <li key={index}>
            {item.truck} - {item.trailer}
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <h2>
          Equipment: {truck} {trailer}
        </h2>
        <label>Equipment number </label>
        <input
          type="text"
          value={truck}
          onChange={(e) => setTruck(e.target.value)}
        />

        <br />

        <label>Additional </label>
        <input
          type="text"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />

        <br />

        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
