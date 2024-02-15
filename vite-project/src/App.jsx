import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

function App() {
  // Use a more specific selector to access the state value:
  const number = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Increment / Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className="quantity">
      <a className="quantity__plus" title="Decrement" onClick={() => dispatch(decNumber())}> <span> - </span> </a>

        {/* Set the input's value correctly using the number from state: */}
        <input name="quantity" type="text" className="quantity__input" value={number} />

        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}> <span> + </span> </a>
      </div>

      <div className="copyright-section">
      <p className="copyright-text">
        © 2024 | All rights reserved. | _Manish-tech-07
      </p>
    </div>
    </>
  );
}

export default App;
