import React from 'react';
import { Provider } from "mobx-react";
import Editor from 'pages/Editor';
import { stores } from 'stores'

function App() {
  return (
    <div className="App">
      <Provider {...stores}>
        <Editor />
      </Provider>
    </div>
  );
}

export default App;