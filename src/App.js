import anylogger from 'anylogger';
import './App.css';

const log = anylogger('my-app')

const createLogStatements = () => {
  log.debug('Logging is easy! (via createLogStatements)')
  log.info('Logging is easy!  (via createLogStatements)')
  log.error('Logging is easy! (via createLogStatements)')
}

function App() {
  log.debug('Logging is easy! (via App)')
  log.info('Logging is easy! (via App)')
  log.error('Logging is easy! (via App)')
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => createLogStatements()}>Create log statements</button>
      </header>
    </div>
  );
}

export default App;
