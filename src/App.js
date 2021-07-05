import React from 'react';
import './App.css';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Homepage from './components/homepage/index';
//componente pai 
function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App;
