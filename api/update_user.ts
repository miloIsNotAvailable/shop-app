import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        
        const { id, new_username } = req.body as { new_username: string, id: string }

        const data = await prisma.user.update( {
            where: {
                id
            },
            data: {
                name: new_username
            }
        } )
        
        console.log( data )
        res.send( { name: 'john Doe' } )

    } catch( e ) {  console.log( e ) }

}