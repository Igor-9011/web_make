import './App.css';
import React, { useState } from 'react'
import Options from './components/options_block/Options.js'
import Main from './components/main_block/Main.js'
import Settings from './components/settings_block/Settings.js'
function App() {
  let [name, setName] = useState(0)

  const hendler = () => {
    setName(++name)
  }
  return (
    <div onClick={hendler} className="app_wraper">
      <Options name={name} />
      <Main name={name} />
      <Settings name={name} />
    </div>
  );
}

export default App;
