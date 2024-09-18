/* import { useState } from "react";

function FormState() {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('jhansi.m@xyz.com');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(fname, lname);
    }

    const handleChange = (e) => {
        //  e.preventDefault();

        setEmail(e.target.value)
    }
    return (<>

        <form onSubmit={handleSubmit}>
            <input type="text" value={fname} onChange={(e) => setFName(e.target.value)}></input>
            <input type="text" value={lname} onChange={(e) => setLName(e.target.value)}></input>

            <input type="text" value={email} onChange={handleChange}></input>


            <input type="submit" value="Submit" />

        </form>

    </>);
}

export default FormState; */