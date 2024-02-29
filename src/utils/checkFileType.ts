import { errorToast } from "./toast";

export default function checkFileType(file: File | null, notify: boolean = true) {
    if (!file) return;

    const acceptedImageTypes = ['image/jpeg', 'image/png'];

    if (!file?.type || !acceptedImageTypes.includes(file?.type)) {
        const message = 'Invalid file type. Please select a file type jpeg or png.';
  
        console.log(
            'Invalid file type. Please select a file type jpeg or png.'
        );

        if (notify) {
           errorToast(message);
        }
        
        return false;
    }

    return true;
}