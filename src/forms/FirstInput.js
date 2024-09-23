import { useFormContext } from "react-hook-form";

export default function Input() {
    const { register, formState: { errors } } = useFormContext({});
    return (
        <>
            first name <input type="text" {...register('firstname', { minLength: 2, required: true, min: 3 })} />

        </>
    );
}