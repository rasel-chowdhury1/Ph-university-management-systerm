import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { tokenVerify } from "../utils/tokenVerify";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";


const Login = () => {
    const {register, handleSubmit} = useForm();
    const [login, {error}] = useLoginMutation();
    const dispatch = useAppDispatch()

    const onSubmit =  async (userData) => {
        console.log({userData})

        const res = await login(userData).unwrap() // when not use unwrap.return {data:{data: {}}} but use this then return only {data: {}}
        const user = tokenVerify(res.data.accessToken);
        console.log({user})
        dispatch(setUser({user, token: res.data.accessToken}))
    }
    return (
        <div>
            <h1>This is login page</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <label htmlFor="id">Id: </label>
                    <input type="text" id="id" {...register("id")} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" {...register("password")}/>
                </div>
                <Button htmlType="submit">submit</Button>
            </form>
        </div>
    );
};

export default Login;