import { useForm } from "react-hook-form"

export default function FormTest() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleClick = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <form onSubmit={handleSubmit(handleClick)}>
            <h1>Form</h1>
            first name <input type="text" {...register('firstname', { minLength: 2, required: true, min: 3 })} />
            {errors.firstname && <span>Field is required</span>}
            <br />
            <br />
            Second name<input type="text" {...register('secondname')} /><br />
            Age<select {...register('age')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select><br />
            <button type="submit">Submit</button>
        </form>
    );
}