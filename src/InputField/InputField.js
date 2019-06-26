import React from 'react'

export const InputField = ({onInput}) => {
  return (
      <form className={'inputField'}>
          <input className={'input'} id='input' type="text" onInput={() => onInput(document.getElementById('input').value)} />
      </form>
  )
};
