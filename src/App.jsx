import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState(false);
  console.log(userData,"App.jsx");
  return (
    <div className="bg-black h-full w-full text-white ">
       <Navbar toggle={toggle} setToggle={setToggle}/>
       
       {!toggle 
        ? <div className='py-10 px-10 flex gap-5 flex-wrap'>
           {userData.map((data) =>{
                return <Usercard data={data}/>
           })}
          
          </div>
        : <div>
           <Form setUserData={setUserData}/>
          </div>
       }
       
      
      
    </div>
  )
}

export default App;
