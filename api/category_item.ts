import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        
        const { category } = req.body as { category: string }

        const data = await prisma.item.findMany( {
            where: {
                category,
            },
            take: 10
        } )
        
        // console.log( data )
        res.json( data )

    } catch( e ) {  console.log( e ) }

}