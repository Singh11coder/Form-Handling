import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState(false);
  
  const handleDelete = (id) => {
     console.log(id);
     setUserData((prev) => prev.filter((p) => p.id!=id));
  }
  return (
    <div className="bg-black h-full w-full text-white ">
       <Navbar toggle={toggle} setToggle={setToggle}/>
       
       {!toggle 
        ? <div className='py-10 px-10 flex gap-5 flex-wrap'>
           {userData.map((data) =>{
                return <Usercard data={data} handleDelete={handleDelete}/>
           })}
          
          </div>
        : <div>
           <Form setUserData={setUserData} setToggle={setToggle}/>
          </div>
       }
       
      
      
    </div>
  )
}

export default App;
