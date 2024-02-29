import styled from "@emotion/styled";
import { ButtonStyled } from "./Style/ButtonStyled";
import { useRef, useState } from "react";
import checkFileSize from "@/utils/checkFileSize";
import checkFileType from "@/utils/checkFileType";

export default function FileInput() {
    const ref = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    console.log('file....', ref.current?.files);

    const onFileUpload = (file: File | null) => {
        if (!file) return;

        if (checkFileSize(file) && checkFileType(file)) {
            setFile(file);
        }
    }

    return (
        <FileInputStyled className='Quantum_file-input-container'>
            <ButtonStyled
                onClick={() => ref.current?.click()}
                variant='contained'
                color='primary'
                size='small'>Upload your Proof of identity</ButtonStyled>
            <p className='Quantum_file-input-file-name'>{file ? file?.name : ''}</p>
            <input 
                ref={ref} 
                onChange={() => onFileUpload(ref.current?.files ? ref.current?.files[0] : null)}
                id='Quantum_file-input' 
                className='Quantum_file-input' 
                type="file" />
        </FileInputStyled>
    )
}

const FileInputStyled = styled.div`
    &.Quantum_file-input-container {
        display: flex;
        flex-direction: row;
        gap: 12px;

        .Quantum_file-input {
            display: none;
        }

        .Quantum_file-input-file-name {
            font-size: 1.2rem;
            font-weight: 300;
            color: #003087;
            margin: 0px;
        }
    }
`;