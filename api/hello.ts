import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        
        const data = await prisma.user.findMany()
        
        console.log( data )
        res.send( { name: 'john Doe' + data.length } )

    } catch( e ) {  console.log( e ) }

}