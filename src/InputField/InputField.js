import React, { useRef } from 'react'

export const InputField = ({onInput}) => {
    const inputRef = useRef();

  return (
      <form className={'inputField'}>
          <input className={'input'} id='input' type="text" ref={inputRef} onChange={() => onInput(inputRef.current.value)} />
      </form>
  )
};
