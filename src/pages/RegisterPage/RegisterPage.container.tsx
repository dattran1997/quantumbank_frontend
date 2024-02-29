import { signUpUser } from "@/api";
import RegisterPage from "./RegisterPage";
import { useForm } from 'react-hook-form';
import { errorToast, successToast } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { IRegisterData } from "@/Types/IRegisterData";
import { signOut } from "@/utils/signOut";

export default function RegisterPageContainer() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const isCitizenIdEnabled = watch('isCitizenIdEnabled');
    const navigate = useNavigate();

    signOut();

    const onSubmit = async (data: IRegisterData) => {

        try {
            const response = await signUpUser(data);
            console.log(response);
            successToast('Registration successful');
            navigate('/login');
        } catch (error) {
            // If the error is a server validation error, you can set it manually using setError
            errorToast(error?.message);
        }
    };

    return (
        <RegisterPage 
            register={register} 
            handleSubmit={handleSubmit(onSubmit)} 
            isCitizenIdEnabled={isCitizenIdEnabled}
            errors={errors}
        />
    )
}