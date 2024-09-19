
import HookRef from "./HookRef";

import { useState } from "react";
import HookuseEffect from "./HookuseEffect";
import FirstState from "./FirstState";
export default function App() {

  const [name, setName] = useState('');



  return (
    <>
      FirstName:<input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

      <br />

      <FirstState />




    </>

  )
}

