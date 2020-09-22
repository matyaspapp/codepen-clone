import React, { useState } from 'react';
import './index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';


const Editor = ({ displayName, language, value, onChange }) => {

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor ${open ? '' : 'collapsed'}`}>
      <div className="editor__header">
        {displayName}
        <button
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          O/C
        </button>
      </div>
      <ControlledEditor
        className="controlledEditor__wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
