import React from 'react';
import './App.css'
import routes from './routes';
import {useRoutes} from "react-router-dom"
import Topbar from './componenet/topbar/Topbar'
import Sidbar from './componenet/sidbar/Sidbar';

function App() {

  let router = useRoutes(routes)
  return (
    <>
      <Topbar/>
      <div className='container'>
        <Sidbar/>
        {router}
      </div>
    </>
  );
}

export default App;
