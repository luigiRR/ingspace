import React from 'react'

function Home() {
  return (
    <div className="App">
      <div className="bg-blue-900 w-full h-24">
        <p className="text-gray-50 font-bold text-center">NAVEGACION</p>
      </div>
      <div className="bg-green-500 w-full h-96">
        <p className="text-gray-50 font-bold text-center">INFORMACION</p>
      </div>
      <div className="bg-amber-300 w-full h-14">
        <p className="text-gray-50 font-bold text-center">CONOCE MAS DE NOSOSTROS</p>
      </div>
      <div className="bg-cyan-500 w-full h-60">
        <p className="text-gray-50 font-bold text-center">INFORMACION</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div><p className="text-gray-50 font-bold text-center bg-pink-500 h-52">INGSPACE</p></div>
        <div><p className="text-gray-50 font-bold text-center bg-pink-500 h-52">COTIZA</p></div>
      </div>
      <div className="bg-gray-500 w-full h-10">
        <p className="text-gray-50 font-bold text-center">INFORMACION</p>
      </div>
    </div>
  )
}

export default Home