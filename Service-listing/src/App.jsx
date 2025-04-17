import React from 'react'
import ServiceCard from './Components/ServiceCard';

const App = () => {
  return (
    <div>
      <h1>SERVICE-LISTING</h1>
      <ServiceCard  ServiceTitle={"Web Development"} ServiceDescription={"Service for web development is done"}/> 
      <ServiceCard ServiceTitle={"Frontend Development"} ServiceDescription={"The frontend part of development"}/>
    </div>
  );
}

export default App;
