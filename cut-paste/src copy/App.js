import logo from './logo.svg';
import './App.css';
import React from "react";
import { RecoilRoot } from "recoil";
import RegisterForm from "./components/registerForm/index.js";


function App() {
  return (

    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>


        <div>
          <h3>Fill up below form</h3>

            <RecoilRoot>
          <RegisterForm />
          </RecoilRoot>

        </div>
        
        
        
     

      <footer>
      <a
          className="App-link"
          href="https://mawercer.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          IMPRINT
        </a>
      </footer>
    </div>
  );
}

export default App;




