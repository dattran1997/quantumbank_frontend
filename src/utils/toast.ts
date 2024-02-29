import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
};

export function successToast(message: string, option: ToastOptions | undefined  = {}) {
    toast.success(message, {
        ...defaultOptions,
        ...option, 
    });
}

export function errorToast(message: string, option: ToastOptions | undefined  = {}) {
    toast.error(message, {
        ...defaultOptions,
        ...option
    });
}
