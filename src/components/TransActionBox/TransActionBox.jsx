import React from 'react'

function TransActionBox({ status }) {
  return (
    <div className='w-11/12 flex flex-col justify-center items-center md:w-[600px] '>
      <div className={`${status ? 'bg-green-200' : 'bg-red-200'} bg-blue-200 w-full
        flex flex-col justify-center items-center gap-3 p-6 pt-12 rounded-xl relative
        sm:p-9 sm:pt-16`}>
        <h1 className={`${status ? 'text-green-500' : 'text-red-500'}
          sansbold w-full text-center text-xl sm:text-2xl sm:mt-2`}>
          {
            status ? 'پرداخت با موفقیت انجام شد' : 'متاسفانه مشکلی پیش آمد'
          }
        </h1>
        <div className={`${status ? 'bg-green-500' : 'bg-red-500'}
          w-16 h-16 flex justify-center items-center rounded-full
          absolute -top-8 ring-4 ${status ? 'ring-green-300' : 'ring-red-300'}
          sm:w-24 md:h-24 sm:-top-12`}>
          {
            status ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 stroke-white sm:w-12 sm:h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 stroke-white sm:w-12 sm:h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )
          }
        </div>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, animi!
        </p>
      </div>
    </div>
  )
}

export default TransActionBox