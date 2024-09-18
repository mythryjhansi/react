import { useState } from "react";

function StateHookTodo() {

    const [todoList, setToDoList] = useState([]);
    const [item, setItem] = useState('');

    const addItem = () => {

        if (item) {

            setToDoList([...todoList, item]);
        }

    }

    return (
        <>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <ul>
                {todoList.map((i) => (<li key={i}>{i}</li>))}
            </ul>
            <button onClick={addItem}>Add Todo</button>
        </>
    );
}

export default StateHookTodo;