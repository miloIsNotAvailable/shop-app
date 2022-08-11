import { Request, Response } from "express";
import { userDataType } from "../interfaces/reduxInterfaces";
import { prisma } from "../prisma/client";

export default async function handler( req: Request, res: Response ) {

    try {
        const { email, password, username } = req.body as userDataType
        const data = await prisma.user.create( {
            data: {
                email: email!,
                name: username!,
                password: password!
            }
        } )
        console.log( data )
        res.json( { 
            email, 
            password, 
            username,
            // error: data ? undefined : 'user not found' 
        } )

    } catch( e ) { 
        console.log( e ) 
        res.json( { error: e } )
    }

}