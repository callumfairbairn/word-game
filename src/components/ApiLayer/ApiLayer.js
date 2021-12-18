import App from '../../App'
import React, { useState } from 'react'

export const ApiLayer = () => {
  const [gameRunning, setGameRunning] = useState(true)

  return (
    <div>
      <App gameRunning={gameRunning} setGameRunning={setGameRunning} />
    </div>
  )
}
