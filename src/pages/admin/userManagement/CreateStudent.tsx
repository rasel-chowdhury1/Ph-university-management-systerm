import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constrant/global";


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
           <Divider> Personal Info.</Divider>
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
                <PHSelect options={genderOptions} name="gender" label="Gender" />
                </Col>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHDatePicker name="dateOfBirth" label="Date of birth" />
                </Col>
                <Col span={24} md={{span: 12}} lg={{span: 8}}>
                  <PHSelect
                  options={bloodGroupOptions}
                  name="bloogGroup"
                  label="Blood group"
                  />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                  <Controller
                    name="image"
                    render={({ field: { onChange, value, ...field } }) => (
                      <Form.Item label="Picture">
                        <Input
                          type="file"
                          value={value?.fileName}
                          {...field}
                          onChange={(e) => onChange(e.target.files?.[0])}
                        />
                      </Form.Item>
                    )}
                  />
                </Col>
            </Row>

          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="contactNo" label="Contact" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>
          <Divider>Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father ContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother ContactNo"
              />
            </Col>
          </Row>

          <Divider>Local Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.contactNo"
                label="Contact No."
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.address"
                label="Address"
              />
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