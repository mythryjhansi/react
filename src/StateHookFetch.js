import React, { useState, useEffect } from 'react';

//https://jsonplaceholder.typicode.com/users

function StartHookFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {

        setLoading(true)

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();

        setData(data);

        setLoading(false);

    }
    useEffect(() => {
        fetchData();
    })

    return (<>

        {loading ? <p>Loading..</p> :
            <ul>
                {
                    data.map(user => <li>{user.username}</li>)
                }
            </ul>
        }
        <button>Fetch</button>
    </>);
}

export default StartHookFetch;