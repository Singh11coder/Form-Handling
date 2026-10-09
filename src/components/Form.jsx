import React,{useState} from 'react'
import {nanoid} from 'nanoid';

const Form = ({setUserData}) => {
 
  const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:''
  });
  
  const handleFormData = (e) => {
      let {name,value} = e.target;
      setFormData({...formData,[name]:value,id:nanoid()})
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setUserData((prev) => [...prev,formData]);     
  }
  
  return (
    <div className="flex justify-center flex-col items-center py-[5%]  border border-white">
        <div className="mb-13  bg-blue-700 rounded-2xl">
          <button className="text-white text-3xl px-10 py-3 rounded-2xl">User Form</button>
        </div>
        <form 
         
           className="flex flex-col items-center gap-20 text-4xl border border-white py-12 px-20 rounded-4xl">
            
           <input 
             name="name"
             onChange={(e) => handleFormData(e)}
             className="w-[650px] h-[80px] border border-white px-4" 
             type="text" placeholder="Enter Name"
           />

           <input 
             name="email"
             onChange={(e) => handleFormData(e)}
             className="w-[650px] h-[80px] border border-white px-4" 
             type="email" 
             placeholder="Enter Email"
           />

           <input 
             name="password"
             onChange={(e) => handleFormData(e)}
             className="w-[650px] h-[80px] border border-white px-4"
             type="password" 
             placeholder="Enter Password"
            />

           <button 
             onClick={(e)=>handleSubmit(e)}
             className="bg-blue-600 w-[200px] py-2 rounded-xl cursor-pointer" 
           >Submit</button>
        </form>
        
    </div>
  )
}

export default Form;
