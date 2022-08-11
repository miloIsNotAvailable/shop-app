import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        const { type } = req.body as { type: string | undefined }
        const data = await prisma.user.findMany()
        res.json( req.body )

    } catch( e ) {  console.log( e ) }

}