import logo from './logo.svg';
import './App.css';
import HookTest from './HookTest';

import { Test } from './ButtonEvents';

function Condition() {
    const flag = true;

    if (flag) {
        return (<Test name="jhansi" project="bhf" lname="mythry" count="4" />)
    }
    else {
        return (<HookTest />)
    }

}

export default Condition;
