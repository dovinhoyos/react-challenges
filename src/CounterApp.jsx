import { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
    
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleLess = () => {
        setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(value)
    }

  return (
    <div>
      <h1>{ counter }</h1>
      <button onClick={ handleAdd }>
        +1
      </button>
      <button onClick={ handleLess }>
        -1
      </button>
      <button onClick={ handleReset }>
        Reset
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
