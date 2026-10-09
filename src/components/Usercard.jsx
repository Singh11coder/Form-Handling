import React from 'react'

const Usercard = ({data,handleDelete}) => {
  console.log(data,"UserData");

   
  return (
    <div className="h-[20%] w-[24%] bg-gray-600 py-5 px-10 text-white text-2xl rounded-3xl">
        
        <div className="py-4 w-[99%] ">
          <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MYdCo7p0ptB3P2e9Ycxym1W2H-dj_ImIlnvocXseGw&s=10"/>
        </div>

        <div className="py-4">
          <h1>{data.name}</h1>
        </div>

        <div className="py-4">
          <h2>{data.email}</h2>
        </div>

        <div className="flex justify-between text-white py-2">
           <button 

             className='bg-cyan-600 py-2 px-4 cursor-pointer rounded-2xl'>Update</button>
           <button  
           onClick={() => handleDelete(data.id)}
           className='bg-red-600 py-2 px-4 cursor-pointer rounded-2xl'>Delete</button>
        </div>
  
    </div>
  )
}

export default Usercard;
