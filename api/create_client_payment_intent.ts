import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import Stripe from 'stripe'

export default async function handler( req: Request, res: Response ) {

    try {
        
        // const { items } = req.body as { items: any }
        const stripe = new Stripe( "sk_test_7mJuPfZsBzc3JkrANrFrcDqC", { 
            apiVersion: "2022-08-01",
            typescript: true
        } )

        const params: Stripe.CustomerCreateParams = {
        description: 'test customer',
        };
    
        const customer: any = await stripe.customers.create(params);
        
        console.log( customer.default_source )
        
        // console.log( data )
        res.json( { clientSecret: customer?.client_secret } )

    } catch( e ) {  
        console.log( e ) 
        res.json( { error: e } )
    }

}