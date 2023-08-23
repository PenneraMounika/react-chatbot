import './App.css';
import 'react-chatbot-kit/build/main.css'
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {isShown === 0 && <div style={{padding: "2rem", border: "1px solid #efefef", borderRadius: "25px", cursor: "pointer", color: "efefef"}} onClick={() => setIsShown(1)}>Enroll Now!</div>}
        {isShown === 1 && <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />}
      </header>
    </div>
  );
}

export default App;
