import { Request, Response } from "express";
import { newItemType } from "../interfaces/reduxInterfaces";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        const { 
            category, 
            desc, 
            price, 
            title, 
            id 
        } = req.body as newItemType & { id: string }

        // const data = await prisma.user.findMany()
        
        // console.log( data )
        res.send( { category, desc, title, id } )

    } catch( e: any ) {  
        console.log( e ) 
        res.json( { error: e?.message } )
    }

}