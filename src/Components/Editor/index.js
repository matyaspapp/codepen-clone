import React, { useState } from 'react';
import './index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { IconButton } from '@material-ui/core';


const Editor = ({ displayName, language, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor ${open ? '' : 'collapsed'}`}>
      <div className="editor__header">
        {displayName}
        <IconButton>
          {open ? (
            <KeyboardArrowLeftIcon onClick={() => setOpen(false)} />
          ) : (
            <KeyboardArrowRightIcon onClick={() => setOpen(true)} />
          )}
        </IconButton>
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
