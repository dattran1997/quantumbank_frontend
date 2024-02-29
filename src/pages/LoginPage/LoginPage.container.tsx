import { signInUser } from "@/api";
import LoginPage from "./LoginPage";
import { useForm } from "react-hook-form";
import { errorToast, successToast } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import useSessionStorage from "@/hooks/useSessionStorage";
import { ILoginData } from "@/Types/ILoginData";

export default function LoginPageContainer() {
    const  { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [storedToken, setToken] = useSessionStorage('token', '');
    const [storedUser, setUser] = useSessionStorage('user', '');
    
    const onSubmit = async (data: ILoginData) => {

        try {
            const response = await signInUser(data);

            setToken(response?.data?.accessToken);
            setUser(response?.data?.user);
            successToast('Login successful');
            navigate('/home');
        } catch (error) {
            errorToast('Invalid credentials');
        }
    }

    return (
        <LoginPage
            register={register}
            handleSubmit={handleSubmit(onSubmit)}
            errors={errors}
        />
    )
}