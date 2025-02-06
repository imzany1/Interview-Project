import React from 'react'

const FlightData = (params) => {
  return (
    <div className=' relative flex bg-white rounded-lg gap-32 mb-3 overflow-hidden drop-shadow-md items-center'>
        <a className='flex justify-center items-center pl-8' href=""><img src={params.icon} width={60} height={60} alt="" />{params.airline}</a>
        <p className='absolute left-[37%]'>{params.from}</p>
        <p className='absolute right-64'>{params.to}</p>
        <p className=' absolute right-12'>{params.fare}</p>
    </div>
  )
}

export default FlightData