
import { ILoginData } from '@/Types/ILoginData';
import axiosInstance from './axiosInstance';
import { IRegisterData } from '@/Types/IRegisterData';


export const signInUser = async (data: ILoginData) => {
  return axiosInstance.post('/auth/signin', data);
};

export const signUpUser = async (data: IRegisterData) => {
  return axiosInstance.post('/auth/signup', data);
}