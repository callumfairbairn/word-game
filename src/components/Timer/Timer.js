import React from 'react'
import './Timer.scss'
import { useInterval } from '../../common/useInterval'

const Timer = ({ time, setTime }) => {
  useInterval(() => {
    const newTime = {
      minutes: time.seconds === 0 ? time.minutes - 1 : time.minutes,
      seconds: time.seconds === 0 ? 59 : time.seconds - 1
    }
    setTime(newTime)
  }, 1000)

  return (
    <div className='timer' data-testid='timer'>
      <div className='time' id='minutes'>
                0{time.minutes}
      </div>
      <div className='time' id='seconds'>
                :{time.seconds < 10 ? 0 : null}{time.seconds}
      </div>
    </div>
  )
}

export default Timer
