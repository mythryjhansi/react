import { useState } from "react";
function StateFormHook() {


    const [fname, setFirstName] = useState('');
    const [sname, setSecondName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(fname + sname);

    }

    return (
        <form onSubmit={handleSubmit}>

            FirstName:<input type="text" value={fname} onChange={(e) => setFirstName(e.target.value)}></input>
            <br />
            Second Name:<input type="text" value={sname} onChange={(e) => setSecondName(e.target.value)}></input>

            <button type="submit">Submit</button>
        </form>
    );
}

export default StateFormHook;