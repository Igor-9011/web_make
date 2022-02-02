import './App.css';
import Options from './components/options_block/Options.js'
import Main from './components/main_block/Main.js'
import Settings from './components/settings_block/Settings.js'
function App() {
  return (
    <div className="app_wraper">
      <Options />
      <Main />
      <Settings />
    </div>
  );
}

export default App;
