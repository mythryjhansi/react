import { useForm } from "react-hook-form"


export default function Form() {
    const { register, handleSubmit } = useForm()


    const onSubmit = (data) => console.log(data)


    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            First Name <input type="text" {...register('fname', { required: true })} /><br />

            LastName <input type="text" {...register('lname')} /><br />


            <input type="submit" />
        </form>
    )
}