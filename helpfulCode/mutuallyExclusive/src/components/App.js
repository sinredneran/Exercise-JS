/* import Parent from "./Parent"; */
/* import StyleTest from './StyleTest'; */

import '../App.css'
import MutuallyExclusive from "./MutuallyExclusive";
const App = () => {
    return (
        <div className="app">
            <h1>App</h1>
            {/* <Parent /> */}
            {/* STYLED COMPONENTS ---- STYLED COMPONENTS */}
            {/* <StyleTest >styled-component button</StyleTest>
            <StyleTest primary >primary styled-component button</StyleTest> */}
            <MutuallyExclusive />
        </div>
    );
}

export default App;