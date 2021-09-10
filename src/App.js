import React  from 'react';
import { Switch , Route , Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
function App() {
return (
<div className='dark:bg-gray-700 '>  
<Header/>
<Switch>
<Route exact  path='/' component={HomePage} />
</Switch> 
</div>
);
}

export default App;
