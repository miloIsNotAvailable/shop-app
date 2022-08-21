import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        
        const data = await prisma.item.findMany( {
            take: 100,
            orderBy: { createdAt: "desc" }
        } )
        
        console.log( data )
        res.json( data )

    } catch( e ) {  
        console.log( e ) 
        res.json( { error: e } )
    }

}