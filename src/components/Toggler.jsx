import React from 'react';
import useToggle from '../hooks/useToggle';

const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
  const [isDog, toggleIsDog] = useToggle(true);

  return (
    <>
      <h1 onClick={toggleIsHappy}> {isHappy ? '😄' : '😞'} </h1>
      <h1 onClick={toggleIsHeartBroken}> {isHeartBroken ? '💔' : '💖'} </h1>
      <h1 onClick={toggleIsDog}> {isDog ? '🐶' : '🐱'} </h1>
    </>
  );
};

export default Toggler;
