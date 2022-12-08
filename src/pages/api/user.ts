import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from 'src/utils/connectDb';
import UserModel from 'src/models/user';
import bcrypt from "bcryptjs";
import * as jwt from "jose";

type Data = {
  name: string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const { email,password } = JSON.parse(req.body);
    try{
        console.log("CONNECTING TO DB");
        await connectDB();
        console.log("CONNECTED TO DB");

        console.log("FETCHING DOCUMENT");
        const user = await UserModel.findOne({ email });
        console.log("FETCHED DOCUMENT");

        const isValidPassword = bcrypt.compareSync(password,user?.password as string);

        if(!isValidPassword)
        return res.json({ error:"invalid password inserted!" });

        let token;
        try{
          token = await new jwt.SignJWT({ email:user.email })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("4h")
          .sign(new TextEncoder().encode(process.env.SECRET))
            
        } catch (error) {
          res.statusCode = 500;
          return res.end(JSON.stringify({ error:"encountered an error processing your request!" }));
        }

        const conclusion = { ...user._doc,token };
        user.token = token;

        res.json({ user:conclusion });

    }catch(error:any){

        res.statusCode = 500;

        if(error.code === 11000)
        return res.end(JSON.stringify({ message:"Email already exists!" }));
        
        return res.end(JSON.stringify({ error }));
    }
}
export default handler;