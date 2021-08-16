import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AllComp } from './Components/AllComp';
import ChatBot from './Components/chatbot/ChatBot'

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <BrowserRouter>
      {(()=>{
          if(click==true){
            return <ChatBot/>
          }
        })()}
      <AllComp/>
      <div class="chat" onClick={handleClick}>
                    <i className={click ? "fas fa-times":"fa fa-comments" } aria-hidden="true"></i>
      </div>
    </BrowserRouter>
  );
}

export default App;
