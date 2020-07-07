import App from '../../App'
import React from 'react'
import { useApi } from '../../functions/useApi/useApi'

export const ApiLayer = () => {

  const [data] = useApi('http://localhost:3030')

  return (
      <div>
        {data && <App data={data}/>}
      </div>
  )
}