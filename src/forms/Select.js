import { useFormContext } from "react-hook-form";
function Select(prop) {
    const { register } = useFormContext();
    return (
        <select {...register(prop.name)}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>

    )
}

export default Select;