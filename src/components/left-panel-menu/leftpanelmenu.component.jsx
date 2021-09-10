import React , { useState } from 'react';
import { FaRegFolder } from 'react-icons/fa';

 

const LeftPanelMenu = () => {

const [ menu , setmenu ] = useState({animals:false});
console.log(menu);
return(
<ul  className=" text-white text-1xl" >
<li className=" m-1 w-wmax flex hover:bg-gray-600 cursor-pointer "  onClick={ () => setmenu({animals:!menu.animals}) } ><FaRegFolder className="text-white mr-2 ml-4 mt-1" /><span >Animals</span></li> 
{ menu.animals ? 
<ul  className=" text-white text-1xl" >
<li className=" m-1 w-wmax flex hover:bg-gray-600 cursor-pointer" ><FaRegFolder className="text-white mr-2 ml-4 mt-1" /><span >Animals</span></li> 
<li className=" m-1 w-wmax flex hover:bg-gray-600 cursor-pointer" ><FaRegFolder className="text-white mr-2 ml-4 mt-1" /><span >Animals</span></li> 
<li className=" m-1 w-wmax flex hover:bg-gray-600 cursor-pointer" ><FaRegFolder className="text-white mr-2 ml-4 mt-1" /><span >Animals</span></li>   
</ul> : null
}

</ul>
)
};

export default LeftPanelMenu;

