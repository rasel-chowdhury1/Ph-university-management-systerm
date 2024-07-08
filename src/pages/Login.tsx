import { Button, Row } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { tokenVerify } from "../utils/tokenVerify";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

type TUser = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
    
}

const Login = () => {
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit =  async (userData: object) => {

        const toastId = toast.loading("logging in...")

        try {
            const res = await login(userData).unwrap() // when not use unwrap.return {data:{data: {}}} but use this then return only {data: {}}
            const user = tokenVerify(res.data.accessToken) as TUser;
            console.log({user})
            dispatch(setUser({user, token: res.data.accessToken}))
            toast("Successfully login user...", {id: toastId, duration: 1000})
            navigate(`/${user.role}/dashboard`)
        } catch (error) {
            toast("Something went wrong!")
            console.log({error})
        }
    }
    return (
        <div>
            <h1>This is login page</h1>

            <Row justify="center" align="middle" style={{height: "100vh"}}>
                <PHForm onSubmit={onSubmit}>
                        <PHInput type="text" name="id" label="User id: "/>
                        <PHInput type="text" name="password" label="Password: "/>
                        <Button htmlType="submit">submit</Button>
                </PHForm>
            </Row>
        </div>
    );
};

export default Login;