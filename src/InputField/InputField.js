import React from 'react'

export const InputField = () => {
  return (
      <form className={'inputField'}>
          <input className={'input'} id='input' type="text" onInput={sendValue} />
      </form>
  )
};

const sendValue = () => {
    console.log(document.getElementById('input').value);
};