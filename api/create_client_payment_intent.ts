import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        
        const { id } = req.body as { id: string, owner_id: string }

        const data = await prisma.item.delete( {
            where: {
                id
            }
        } )

        res.json( data )

    } catch( e ) {  
        console.log( e ) 
        res.json( { error: e } )
    }

}