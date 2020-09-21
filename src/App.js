import React, { useState } from 'react';
import './App.css';
import Editor from './Components/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <div className="app">
      <div className="app__pane app__editors">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
          />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
          />
      </div>
      <div className="app__pane">

      </div>
    </div>
  );
}

export default App;
