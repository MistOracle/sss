import type { NextApiRequest, NextApiResponse } from 'next';
import Keys from 'src/models/keys';
import connectDB from 'src/utils/connectDb';
import NextCors from "nextjs-cors";

type Data = {
  name: string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  await NextCors(req,res,{
    methods:["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin:"*",
    optionsSuccessStatus:200
  });

    const { regKey,url } = JSON.parse(req.body);

    try{
        console.log("CONNECTING TO DB");
        await connectDB();
        console.log("CONNECTED TO DB");

        const key = await Keys.findOne({ regKey });
        if(!key)
        return res.json({ success:false, error:"invalid regKey!"});

        console.log("CREATING DOCUMENT");
        const result = await Keys.updateOne({ regKey },{ regKey,url });
        console.log("CREATED DOCUMENT");

        res.json({ result });

    }catch(error:any){

        res.statusCode = 500;

        if(error.code === 11000)
        return res.end(JSON.stringify({ message:"Key already exists!" }));

        return res.end(JSON.stringify({ error }));
    }
}
export default handler;