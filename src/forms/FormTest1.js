import { FormProvider, useForm } from "react-hook-form";

import Input from "./Input";
import Select from "./Select";

function FormTest1() {

    const methods = useForm();

    const handleClick = (data) => {

        console.log(data);
    }

    return (

        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleClick)}>

                FirstName <Input name="fname" />
                <br />
                SecondName <Input name="secondName" />
                <br />
                Age <Select name="age" />

                <button type="submit">Submit Form</button>
            </form>
        </FormProvider >
    );
}

export default FormTest1;