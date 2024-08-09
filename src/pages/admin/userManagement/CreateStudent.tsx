import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Row } from "antd";


const CreateStudent = () => {

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        console.log(data);

        const formData = new FormData();

        formData.append("data", JSON.stringify(data))

        console.log(formData.get("data"))
    }
    return (
        <div>
            <h1>This is create student...</h1>
<Row>
    <Col span={24}>
        <PHForm onSubmit={onSubmit}>
            <Row gutter={8}>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHInput type="text" name="name.firstName" label="First Name" />
                </Col>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHInput type="text" name="name.middelName" label="Middel Name" />
                </Col>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHInput type="text" name="name.lastName" label="Last Name" />
                </Col>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHInput type="text" name="gender" label="Gender" />
                </Col>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHInput type="text" name="dateOfBirth" label="Date Of Birth" />
                </Col>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHInput type="text" name="bloodGroup" label="Blood Group" />
                </Col>
            </Row>
            
            <Button htmlType="submit">Submit</Button>
        </PHForm>
    </Col>
</Row>
        </div>
    );
};

export default CreateStudent;