import Dynamic from "./Dynamic";
import SimpleComponent from "./SimpleComponent";

import {useState} from "react";

function App() {
    //const Dynamic = import("./SimpleComponentForDynamic");
    import("./math").then(math => {
        console.log(math.add(16, 26));
    });
    const [condition, setCondition] = useState(false)
    setTimeout(() => setCondition(true), 5000)
    return (
        <div className="App">
            {condition ? <Dynamic/> : null}
            <SimpleComponent/>
        </div>
    );
}

export default App;
