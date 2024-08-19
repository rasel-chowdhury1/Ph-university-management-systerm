import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthNames } from "../../../constrant/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemisterSchema } from "../../../schema/academicSemister.schema";
import { useAddAcademicSemisterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";


const nameOptions = [
    {value: "01",label: "Autumn"},
    {value: "02",label: "Summer"},
    {value: "03",label: "Fall"},
]

const currentYear = new Date().getFullYear();
const yearOptions = [0,1,2,3].map(number => (
    {
    value: String(currentYear+number), 
    label: String(currentYear+ number)
    }
)) 

const monthOptions = monthNames.map(name => (
    {value: name, label: name}
))

const CreateAcademicSemister = () => {
    const [addAcademicSemister] = useAddAcademicSemisterMutation(); 

    const onSubmit : SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("creating...");
        
        const name = nameOptions[Number(data?.name)-1]?.label;

        const semisterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.start,
            endMonth: data.end
        }
        

        try {
            console.log(semisterData)
            const res = await addAcademicSemister(semisterData) as TResponse;
            if(res.error){
                toast.error(res.error.data.message, {id: toastId})
            }else{
                toast.success("Semister created.", {id: toastId})
            }
        } catch (error) {
            toast.error("Something went wrong!", {id: toastId})
            console.log({error})
        }
    }

    
    return (
        <Flex justify="center" align="center">
          <Col span={6}>
            <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemisterSchema)}>
                <PHSelect label="Name: " name="name" options={nameOptions}/>
                <PHSelect label="Year: " name="year" options={yearOptions} />
                <PHSelect label="Start Month: " name="start" options={monthOptions} />
                <PHSelect label="End Month: " name="end" options={monthOptions} />
                <Button htmlType="submit">Submit</Button>
            </PHForm>
          </Col>
        </Flex>
        
    );
};

export default CreateAcademicSemister;
