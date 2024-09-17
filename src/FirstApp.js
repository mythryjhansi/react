import HookTest from './HookTest';
import Form from './Form'
export default function FirstApp(prop) {

    const items = [1, 2, 3, 4];

    const flag = false;

    const inline = false;

    return (
        <>
            <p>Name {prop.name}</p>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
            {flag && <p>Display this onlyif  true</p>}
            {inline ? <HookTest /> : <Form />}

            <button onClick={prop.eventHandler}>Test</button>

        </>

    )
}