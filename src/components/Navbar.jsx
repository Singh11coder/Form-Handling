import React from 'react'

const Navbar = ({toggle,setToggle}) => {
  return (
    <div className="h-20px w-full text-4xl px-14 py-6  bg-violet-700 flex justify-between items-center">
       <div>
        Logo
       </div>
       <div className="flex gap-10">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Contact</h2>
       </div>
       <div>
         <button 
           className="bg-black text-white py-2 px-8 rounded-4xl cursor-pointer"
           onClick={() => setToggle((prev) => !prev)}  
         >{toggle ? "Dashboard" : "Create"}</button>
       </div>
    </div>
  )
}

export default Navbar
