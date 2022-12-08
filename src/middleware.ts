import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req:NextRequest){

    const token = req.cookies.get("jwt")?.value as string;
    const url = req.url as string;

    const secret = new TextEncoder().encode(process.env.SECRET);

    try{

        if(!token)
        return NextResponse.next();

        const { payload } = await jwtVerify(token,secret);

        if(payload && url === process.env.HOME_URL)
        return NextResponse.redirect(new URL("/backend", process.env.HOME_URL));

    }catch(error){
        console.log(error);
        return NextResponse.redirect(new URL("/", process.env.HOME_URL));
    }

}