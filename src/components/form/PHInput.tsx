import { Form, Input } from "antd";
import { Controller} from "react-hook-form";

type TInputProps = {
    type:string,
    name:string, 
    label?:string
}

const PHInput = ({type, name, label}: TInputProps) => {

    return (
        <div style={{marginBottom: "20px"}}>
         <Controller
          name={name}
          render={({field}) => 
          <Form.Item label={label}>
            <Input 
             {...field} 
             style={{marginTop: "5px"}} 
             type={type} 
             id={name}
             size='large' 
            />
        </Form.Item>}
         />
        </div>
    );
};

export default PHInput;