import React from 'react';
import './App.css';
import Editor from './Components/Editor';

function App() {
  return (
    <div className="app">
      <div className="app__editors">
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className="app__frame">

      </div>
    </div>
  );
}

export default App;
