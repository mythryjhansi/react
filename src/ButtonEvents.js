export function Test({ name, lname, count }) {

    const items = [1, 2, 3, 4, 5];

    const buttonEventHandler = (attr) => {
        console.log('button clicked' + attr)
    }

    return (

        <>
            <h1>PageTitle</h1>
            <span>{name}</span>
            <span>{lname}</span>
            {count > 5 ? <span>count more than 5</span> : <span>count less than 5</span>}
            <br />

            <br />
            <ul>
                {
                    items.map((item, index) => <li key={item}>{item}</li>)
                }
            </ul>
            <button onClick={() => buttonEventHandler('hi')}>Add</button>
        </>

    )
}



