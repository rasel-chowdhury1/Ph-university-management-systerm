import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";


type TFromProps = {
    onSubmit: SubmitHandler<FieldValues>;
    resolver?: any;
    children: ReactNode
}

type TFormConfig = {
    resolver? : any
}

const PHForm = ({onSubmit, resolver, children}: TFromProps) => {
    const formConfig : TFormConfig= {};

    if(resolver){
        formConfig['resolver'] = resolver
    }

    const methods = useForm(formConfig);

    const submit : SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        methods.reset();
    }

    return (
        <FormProvider {...methods}>
           <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
            {children}
           </Form>
        </FormProvider>
    );
};

export default PHForm;