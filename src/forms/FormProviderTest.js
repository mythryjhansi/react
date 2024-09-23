import { useForm, FormProvider } from "react-hook-form"
import Input from "./FirstInput";

function FormProviderTest() {

    const methods = useForm();
    const handleClick = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleClick)}>
                <Input />
                <button type="submit" >Submit</button>
            </form>
        </FormProvider>);
}

export default FormProviderTest;