import useCustomHook from "./useCustomHook";

function Basket() {
    const { count, addItem, deleteItem } = useCustomHook(0);

    return (
        <>
            <span>Count:{count}</span><br />
            <input type="button" value="add" onClick={addItem} />

            <input type="button" value="delete" onClick={deleteItem} />
        </>
    );
}

export default Basket;

