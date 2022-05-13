import 'antd/dist/antd.css';

import './App.css';
import './index.css';

import WithStream from "./WithStream";
import StatusMonitor from "./StatusMonitor";
import DataConsumer from "./DataConsumer";

function App() {
    return (<>
        <div className="App">
            <header className="App-header">
                <WithStream>
                    <StatusMonitor/>
                    <DataConsumer/>
                </WithStream>
            </header>
        </div>
    </>);
}

export default App;
