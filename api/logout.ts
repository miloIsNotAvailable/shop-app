import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import cookie from 'cookie'

export default async function handler( req: Request, res: Response ) {

    try {
        
        res.setHeader( 'Set-Cookie', cookie.serialize( 'refresh_token', "", {
            httpOnly: true,
            secure: true,
            // expires: 60 * 60 * 24 * 7 
        } ) )
        
        res.send( { name: 'john Doe' } )

    } catch( e ) {  console.log( e ) }

}