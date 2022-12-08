import type { NextApiRequest, NextApiResponse } from 'next';
import Keys from 'src/models/keys';
import connectDB from 'src/utils/connectDb';

type Data = {
  name: string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { regKey,url } = JSON.parse(req.body);

    try{
        console.log("CONNECTING TO DB");
        await connectDB();
        console.log("CONNECTED TO DB");

        console.log("CREATING DOCUMENT");
        const result = await Keys.create({ regKey,url });
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