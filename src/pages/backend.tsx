import { GetServerSideProps } from "next";
import { Router, useRouter } from "next/router";
import Backend from "src/components/backend";
import Keys from "src/models/keys";
import { Container, Title } from "src/styles/styled";
import connectDB from "src/utils/connectDb";
import { KeyGenerator } from "src/utils/KeyGenerator";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

interface DashboardProps {
    allKeys:{ regKey:string;_id:string;url:string; }[]
}

export default function Dashboard({ allKeys }:DashboardProps){

    const [loading,setLoading] = useState<boolean>(true);

    const Router = useRouter();

    useEffect(()=>{
        if(!Cookie.get("jwt")){
            Router.replace("/");
            return;
        }
        setLoading(false);
    },[])

    const handleNewKey = async()=>{

        const regKey = KeyGenerator("HIG-",14);
        const data = await fetch("/api/registerKey",{
            method:"POST",
            headers:{
                contentType:"application/json"
            },
            body:JSON.stringify({ regKey,url:"" })
        })

        const res = await data.json();

        Router.reload();
    }

    const handleLogout = ()=>{
        Cookie.remove("jwt");
        Router.replace("/");
    }

    if(loading)
    return <Title align="center">Loading...</Title>

    return (
        <Container>
            <Container display="flex" align="center" justify="center">
                <Container w="60vw" m="auto" br={ 1 } mv={ 2 } p={ 1.5 } bgd="coral" onClick={ handleNewKey } button pointer>
                    <Title align="center" size="calc(15px + 1.5vw)" color="lightgrey">Generate reg Key</Title>
                </Container>
                <Container p={ 1.5 } mv={ 2 } bgd="crimson" button pointer onClick={ handleLogout }>
                    <Title size="calc(15px + 1.5vw)" color="lightgrey">LogOut</Title>
                </Container>
            </Container>
            {
                allKeys.map(({ regKey,url,_id })=><Backend key={ _id } regkey={ regKey } url={ url } />)
            }
        </Container>
    );
}

export const getServerSideProps:GetServerSideProps = async()=>{
    try{
        console.log("CONNECTING TO DB");
        await connectDB();
        console.log("CONNECTED TO DB");

        console.log("FETCHING DOCUMENT");
        const result = await Keys.find().sort({ _id:-1 });
        console.log("FETCHED DOCUMENT");

        return {
            props:{
                allKeys:JSON.parse(JSON.stringify(result))
            }
        }
 
    }catch(error:any){

        return{
            notFound:true
        }

    }
}