import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler( req: Request, res: Response ) {

    try {
        if( !req.headers.cookie ) throw Error( "user is logged out" )
        const refresh_token_cookie = req.headers.cookie.match(/refresh_token=([^;]+)/) 
        
        if( !refresh_token_cookie ) throw Error( "user is logged out" )
        
        // let access_token: string | undefined;        
        const v = jwt.verify( refresh_token_cookie[1], process.env.REFRESH_TOKEN! )
        const access_token = jwt.sign( v, process.env.ACCESS_TOKEN! )

        res.json( { cookie: access_token, decoded: v } )
        // const verified = jwt.verify()

    } catch( e: any ) {  
        console.log( e ) 
        res.json( { error: e.message } )
    }

}