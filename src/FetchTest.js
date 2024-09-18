function FetchTest() {

    // const [data, setData] = useState([]);

    const handleFetch = async () => {

        const api = 'https://jsonplaceholder.typicode.com/users';

        const response = await fetch(api);

        const data = await response.json();

        console.log(data);

    }

    return (
        <>

            <button onClick={handleFetch} >Fetch</button>


        </>
    );
}

export default FetchTest;