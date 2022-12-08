import type { NextApiRequest, NextApiResponse } from 'next'
import UserModel from 'src/models/user';
import connectDB from 'src/utils/connectDb';
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

        console.log("CREATING DOCUMENT");
        const result = await UserModel.create({ password, email });
        console.log("CREATED DOCUMENT");

        let token;
        try{
          token = await new jwt.SignJWT({ email:result.email })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("4h")
          .sign(new TextEncoder().encode(process.env.SECRET))
            
        } catch (error) {
          res.statusCode = 500;
          return res.end(JSON.stringify({ error:"encountered an error processing your request!" }));
        }

        const conclusion = { ...result._doc,token };
        result.token = token;

        res.json({ result:conclusion });

    }catch(error:any){

        res.statusCode = 500;

        if(error.code === 11000)
        return res.end(JSON.stringify({ message:"Email already exists!" }));
        
        return res.end(JSON.stringify({ error }));
    }
}
export default handler;