import { errorToast } from "./toast";

export default function checkFileSize(file: File | null, maxFileSizeByMB?: number, notify: boolean = true) {
    if (!file) return;
    const defaultMaxFileSizeByMB = 20;

    if (file?.size > (maxFileSizeByMB || defaultMaxFileSizeByMB) * 1024 * 1024) {
        // File size exceeds the maximum limit of 20MB
        const message = `File size exceeds the maximum limit of ${maxFileSizeByMB || defaultMaxFileSizeByMB}MB.`;

        if (notify) {
            errorToast(message);
        }

        return false;
    }

    return true;
}