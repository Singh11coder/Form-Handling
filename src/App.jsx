import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {
  const [userData, setUserData] = useState(
   JSON.parse(localStorage.getItem("userArr")) || []);
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState({});
  
  const handleDelete = (id) => {
     console.log(id);
     let arr = userData.filter((d) => d.id !== id);
     setUserData(arr);
     console.log(arr)
     localStorage.setItem("userArr",JSON.stringify(arr));     
  }

  const handleUpdate = (id) => {
     console.log(id);
     let obj = userData.find((d) => d.id === id)
     console.log(obj);
     setUpdate(obj); 
     setToggle(true);
  }

  return (
    <div className="bg-black h-full w-full text-white ">
       <Navbar toggle={toggle} setToggle={setToggle}/>
       
       {!toggle 
        ? <div className='py-10 px-10 flex gap-5 flex-wrap'>
           {userData.map((data) =>{
                return <Usercard 
                  key={data.id}
                  data={data} 
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
               />
           })}
          
          </div>
        : <div>
           <Form 
             userData={userData}
             setUserData={setUserData} 
             setToggle={setToggle}
             setUpdate={setUpdate}
             update={update}
             />
          </div>
       }
       
      
      
    </div>
  )
}

export default App;
