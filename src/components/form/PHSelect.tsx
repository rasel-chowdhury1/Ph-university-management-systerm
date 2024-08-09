import { Form, Select} from 'antd';
import { Controller } from 'react-hook-form';

type TProps = {
    name: string,
    label?: string,
    options: {value: string, label: string, disabled?: boolean}[]
}

const PHSelect = ({name, label, options}: TProps) => {
    return (
        <Controller
        name={name}
        render={({field, fieldState: {error} }) => 
        <Form.Item label={label}>
            <Select
             {...field}
            style={{ width: "100%" }}
            options={options}
            size='large'
            />
            {error && <span style={{color: "red"}}>{error.message} </span>}
         </Form.Item>
      } />
    );
};

export default PHSelect;