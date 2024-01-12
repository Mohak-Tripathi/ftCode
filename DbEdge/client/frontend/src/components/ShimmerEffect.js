import React from 'react'

const ShimmerEffect = () => {

  const shimmerArray = new Array(7).fill(null)

  return (
    <>
    <div className='text-3xl font-bold text-center p-4 m-4'>HeartBeat Summary Per Bucket</div>
    <div className='w-4/5 mx-auto p-4 shadow-2xl'>
    <div className="flex flex-wrap justify-between" >
      
      {shimmerArray.map((_, index)=>{
        return (
          <div key={index} className="w-1/2 p-2 h-64 flex justify-center">
          <div key={index} className="animate-pulse   rounded-full w-64 h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer mx-2">  </div>
          </div >
        )
      })}
    </div>
</div>
    </>
  )
}

export default ShimmerEffect