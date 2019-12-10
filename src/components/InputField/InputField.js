import React, { createRef } from 'react'

export const InputField = ({ setInput, onFormSubmit }) => {
  const inputRef = createRef()

  return (
    <form className='input-field' id='input-field' data-testid='input-field' onSubmit={onFormSubmit}>
      <input
        className='input'
        id='input'
        type='text'
        ref={inputRef}
        onChange={() => setInput(inputRef.current.value.toLowerCase())}
        autoFocus
      />
    </form>
  )
}
