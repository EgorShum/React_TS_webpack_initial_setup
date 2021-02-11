import React, { FC, useState } from 'react';


export const Button: FC<{ handleClick: ()=>void}> = ({ handleClick }) => {
  const [state, setState] = useState(0);

  console.log('Button re-renders: ', state);
  return (
    <button
      onClick={() => {
        setState(state+1)
        handleClick()
      }}
    >Click me</button>
  );
}