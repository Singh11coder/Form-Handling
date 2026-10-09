import React,{useState} from 'react'
import {nanoid} from 'nanoid';

const Form = ({userData,setUserData, setToggle,setUpdate,update}) => {
  console.log(userData)
  const [formData, setFormData] = useState(update ? update : {
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
      if(update?.id){
        const id = update.id;
        let arr = userData.map((user) => {
          return user.id === id 
           ? {...user,...formData,id:user.id}
           :user
        });
        setUserData(arr);
        localStorage.setItem("userArr",(JSON.stringify(arr)));
      }
      else{
        let arr = [...userData,formData]
        setUserData(arr);
        localStorage.setItem("userArr",JSON.stringify(arr));
      }
      
      setFormData({
         name:'',
         email:'',
         password:''
      });
      setToggle(false);
      setUpdate({});
  }
  
  return (
    <div className="flex justify-center flex-col items-center py-[5%]  border border-white">
        <div className="mb-13  bg-blue-700 rounded-2xl">
          <button className="text-white text-3xl px-10 py-3 rounded-2xl">User Form</button>
        </div>
        <form 
         
           className="flex flex-col items-center gap-20 text-4xl border border-white py-12 px-20 rounded-4xl">
            
           <input 
             value={formData.name}
             name="name"
             onChange={(e) => handleFormData(e)}
             className="w-[650px] h-[80px] border border-white px-4" 
             type="text" placeholder="Enter Name"
           />

           <input 
             value={formData.email}
             name="email"
             onChange={(e) => handleFormData(e)}
             className="w-[650px] h-[80px] border border-white px-4" 
             type="email" 
             placeholder="Enter Email"
           />

           <input 
             value={formData.password}
             name="password"
             onChange={(e) => handleFormData(e)}
             className="w-[650px] h-[80px] border border-white px-4"
             type="password" 
             placeholder="Enter Password"
            />

           <button 
             onClick={(e)=> handleSubmit(e)}
             className="bg-blue-600 w-[200px] py-2 rounded-xl cursor-pointer" 
           >Submit</button>
        </form>
        
    </div>
  )
}

export default Form;
