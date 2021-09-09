
import './App.css';

function App() {
return (
 <div className='dark:bg-gray-700 '>
  <ul className="flex border-2  border-gray-500  ">
  <li className="-mb-px mr-1">
  <a className=" inline-block  border-r-2 border-l-2 border-gray-500 rounded-t py-2 px-4 text-white font-semibold" href="#">MAUVE</a>
  </li>
  </ul>
  <div className="container mx-auto  ">
  <div className="float-left relative  box-border w-1/6 h-ml bg-gray-700 border-gray-500 border-r-2 border-l-2 ">
  <select className="box-border focus:outline-none text-white text-1xl absolute top-1 right-1 w-wmax bottom-dw h-8 bg-gray-600 ">
  <option className="text-white text-1xl border-none" >Nationtheory</option>
  <option className="text-white text-1xl border-none" >Saab</option>
  </select>
  <ul  className=" text-white text-1xl absolute top-14 right-1 w-wmax bottom-dw h-8 bg-gray-600  " >
   <li></li> 
  </ul>
  </div>
   <div className="float-right w-5/6 h-ml bg-gray-700 ">
    
   </div>
  </div>
  </div>  
  );
}

export default App;
