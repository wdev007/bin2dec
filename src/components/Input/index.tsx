import React, { FC } from 'react';

const Input: FC = () => {
  return (
    <div>
      <input type="text" onChange={(e) => {
        console.log(e.target.value)
      }} />
    </div>
  )
}

export default Input;