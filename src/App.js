import React from 'react';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer mensaje={"Bienvenido a Pets club"}/>
    </div>
  );
}

export default App;
