import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        
        const { id } = req.body as { id: string } 

        const data = await prisma.item.findUnique( {
            where: { id }
        } )
        
        const user_email = await prisma.user.findUnique( {
            where: {
                id: data?.owner_id
            }
        } )

        console.log( data )
        res.json( { ...data, email: user_email?.email } )

    } catch( e ) {  
        console.log( e ) 
        res.json( { error: e } )
    }

}