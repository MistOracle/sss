import styled from "styled-components";
import { Dispatch,SetStateAction } from "react";

interface CustomInputProps {
    bgd?:string;
    line?:string;
    border?:string;
    color?:string;
    ho?:string;
    fo?:string;
    phc?:string;
    br?:string;
    placeholder?:string;
    size?:string;
    type?:"password" | "text";
    value:string;
    setValue:Dispatch<SetStateAction<string>> | FunctionStringCallback;
}

export default function CustomInput({ placeholder,bgd,line,border,color,ho,fo,phc,br,size,type,value,setValue }:CustomInputProps){
        return <Input value={ value } onChange={ (e)=>setValue(e.target.value) } placeholder={ placeholder } type={ type === "password"?"password":"text"} fs={ size } br={ br } bgd={ bgd } line={ line } border={ border } color={ color } ho={ ho } fo={ fo } phc={ phc } />;
}

interface InputProps{
    br?:string;
    bgd?:string;
    line?:string;
    border?:string;
    color?:string;
    ho?:string;
    fo?:string;
    phc?:string;
    fs?:string;
}
const Input = styled.input<InputProps>`
    background:${({ bgd })=>bgd??""};
    outline:${({ line })=>line??""};
    border:${({ border })=>border??""};
    color:${({ color })=>color??""};
    font-size:${({ fs })=>fs??"calc(15px + 5vw)"};
    width:100%;
    height:auto;
    :hover{  
        outline:${({ line })=>line??""};
    }
    :focus{
        outline:${({ fo })=>fo??""}; 
    }
    ::placeholder{
        color:${({ phc })=>phc??""}; 
    }
`