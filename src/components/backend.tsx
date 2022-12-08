import { Copy } from "@styled-icons/fluentui-system-filled/Copy";
import { KeyReset } from "@styled-icons/fluentui-system-filled/KeyReset";
import { AppsListDetail } from "@styled-icons/fluentui-system-regular/AppsListDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Divider, Flex, Marginalize, Title } from "src/styles/styled";

interface BackendProps {
    regkey:string;
    url:string;
}

export default function Backend({ regkey,url }:BackendProps){

    const theme = "teal";
    const [ details,setDetails ] = useState<boolean>(false);
    const [ copied,setCopied ] = useState<boolean>(false);
    const Router = useRouter();

    useEffect(()=>{
        if(copied){
            const timer = setInterval(()=>{
                setCopied(false);
            },3000);

            return ()=>clearInterval(timer);
        }
    },[ copied ]);

    const handleClipboard = ()=>{ 
        navigator.clipboard.writeText(regkey);
        setCopied(true);
    }

    const handleReset = async()=>{
        const resetBlob = await fetch("/api/updateKey",{
            method:"POST",
            headers:{
                contentType:"application/json"
            },
            body:JSON.stringify({ regKey:regkey,url:"" })
        });

        const { result } = await resetBlob.json();
        result.acknowledged && Router.reload();
    }

    return (
        <Container color="black">
            <Divider mv={ 5 } />
            <Container w="98vw" m="auto" display="flex" align="flex-start" justify="center">
            
                <Container mh={ 1 } br={ 2 } p={ 1 } border={ 0.4 } bc={ theme }>
                    <Title size="calc(18px + 0.9vw)" color="lightgrey" >{ regkey }</Title>
                    {

                        details?
                        <Container>
                            <Container mv={ 1.5 } br={ 2 } bgd={ copied?theme:"lightgrey" } p={ 1 } onClick={ handleClipboard } display="flex" centralize button pointer>
                                <Copy size={ 38 } color={ copied?"lightgrey":theme } />
                                <Marginalize />
                                <Title size="calc(20px + 1vw)" color={ copied?"lightgrey":theme }>{ copied?"COPIED!":"COPY REGKEY!" }</Title>
                            </Container>
                            <Container maxW="75vw" mv={ 1.5 } br={ 2 } m="auto">
                                <Flex fw align="center">
                                    <Container p={ 0.7 } br={ 1.5 } bgd="lightgrey">
                                        <Title size={ 3.2 } color={ url.length?theme:"crimson" }>URL</Title>
                                    </Container>
                                    <Marginalize />
                                    <Title size={ 3.5 } color={ url.length?theme:"crimson" }>{ url.length?url:"offline" }</Title>
                                </Flex>
                            </Container>
                            <Container br={ 2 } bgd={ "crimson" } p={ 1 } display="flex" onClick={ handleReset } centralize button pointer>
                                <KeyReset size={ 38 } color="lightgrey" />
                                <Marginalize />
                                <Title size="calc(20px + 1vw)" color="lightgrey">RESET</Title>
                            </Container>
                        </Container>:""

                    }
                </Container>

                <Container animate="0.15s ease-in-out" br={ 2 } p={ 1 } bgd={ details?"crimson":theme } onClick={()=>setDetails(!details)} button pointer>
                    <AppsListDetail size={ 38 } color="lightgrey" />
                </Container>

            </Container>
        </Container>
    );
}
