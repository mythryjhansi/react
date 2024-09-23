

import { useFormContext } from "react-hook-form";

export default function Input({ name }) {

    const { register } = useFormContext();

    return (
        <>
            <input type="text" {...register(name)} />

        </>
    );
}