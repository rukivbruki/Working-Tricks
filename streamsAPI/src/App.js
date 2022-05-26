import 'antd/dist/antd.css';

import './App.css';
import './index.css';

import WithStream from './components/WithStream';
import StatusMonitor from './components/StatusMonitor';
import DataConsumer from './components/DataConsumer';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <WithStream>
            <StatusMonitor />
            <DataConsumer />
          </WithStream>
        </header>
      </div>
    </>
  );
}

export default App;
