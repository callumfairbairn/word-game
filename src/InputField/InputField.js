import React, { useRef } from 'react'

export const InputField = ({onInput}) => {
    const inputRef = useRef();

  return (
      <form className={'inputField'} id={'input-form'} onSubmit={preventSubmit}>
          <input className={'input'}
                 id='input'
                 type='text'
                 ref={inputRef}
                 onChange={() => onInput(inputRef.current.value.toLowerCase())}
          />
      </form>
  )
};

const preventSubmit = (e) => {
    e.preventDefault()
};
