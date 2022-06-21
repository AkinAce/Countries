import React from 'react';
import Display from './display';
import Footer from './footer';
import './index.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App total">
        <Display/>
        <footer>
          <Footer/>
         </footer> 
      </div>
    </React.Fragment>
  );
}

export default App;
