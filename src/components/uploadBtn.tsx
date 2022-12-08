import { useRef } from "react";
import { Container, Title } from "src/styles/styled";

interface UploadBtnProps {
    addUser:(data: { name:string; email:string; }) => void;
}

export default function UploadBtn(props:UploadBtnProps){
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleNewUser = ()=>{

        const name = "Darius Black";
        const email = "darius@email.com";

        props.addUser({ name,email });

        formRef.current?.reset();
    }

    return (
        <form ref={ formRef }>
            <Container w="60vw" m="auto" br={ 1 } mv={ 2 } p={ 1.5 } bgd="coral" onClick={ handleNewUser } button pointer>
                <Title size="calc(15px + 1.5vw)" color="lightgrey">Generate new User</Title>
            </Container>
        </form>
    );
}