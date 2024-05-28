import React from 'react';
import './Counter.css';

interface Props {
  count: number;
}

const Counter: React.FC<Props> = ({count}) => {
  return (
    <h2 className="Counter">Tries: {count}</h2>
  );
};

export default Counter;