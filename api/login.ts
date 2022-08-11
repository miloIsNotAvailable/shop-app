import { Request, Response } from "express";
import { userDataType } from "../interfaces/reduxInterfaces";
import { prisma } from "../prisma/client";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import cookie from 'cookie'
dotenv.config()

export default async function handler( req: Request, res: Response ) {

    try {
        const { email, password } = req.body as userDataType
        const data = await prisma.user.findUnique( {
            where: { email }
        } )
        // console.log( data )
        if( !data ) throw Error( 'user not found' )
        
        const jwtToken = data && jwt.sign( data, process.env.REFRESH_TOKEN! )
        
        res.setHeader( 'Set-Cookie', cookie.serialize( 'refresh_token', jwtToken, {
            httpOnly: true,
            secure: true,
            // expires: 60 * 60 * 24 * 7 
        } ) )

        res.json( { 
            ...data, 
            error: data ? undefined : 'user not found' 
        } )

    } catch( e: any ) { 
        console.log( e ) 
        res.json( { error: e?.message }  ) 
    }

}