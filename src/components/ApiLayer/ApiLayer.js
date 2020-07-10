import App from '../../App'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HOST_IP_ADDRESS } from '../../common/constants'

export const ApiLayer = () => {
  const [gameRunning, setGameRunning] = useState(true)
  const [data, setData] = useState(undefined)
  console.log(process.env.NODE_ENV)

  useEffect(() => {
    if (gameRunning) {
      axios.get(`${HOST_IP_ADDRESS}/${Date.now()}`).then(r => setData(r.data))
    }
  }, [gameRunning])

  return (
    <div>
      {data && <App data={data} setData={setData} gameRunning={gameRunning} setGameRunning={setGameRunning} />}
    </div>
  )
}
