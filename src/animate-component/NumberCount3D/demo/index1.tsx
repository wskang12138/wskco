import React, { useEffect, useState } from 'react';
import { NumberCount3D } from 'wskco';

export default () => {
  const [number, setNumber] = useState(1000000);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber((number) => ++number);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [number]);

  return <NumberCount3D number={number} />;
};
