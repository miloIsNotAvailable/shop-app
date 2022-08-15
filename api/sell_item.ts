import { Request, Response } from "express";
import { newItemType } from "../interfaces/reduxInterfaces";
import { prisma } from "../prisma/client";
import { app } from "../constants/firebase";
import { ref, getStorage, uploadString, getDownloadURL } from 'firebase/storage'
import { uuid } from 'uuidv4'

export default async function handler( req: Request, res: Response ) {

    try {
        const { 
            category, 
            desc, 
            price, 
            title, 
            image,
            id 
        } = req.body as newItemType & { id: string }

        app
        const storage = getStorage()
        const item_id = uuid()
        const imgRef = ref( storage, `${ id }/${ item_id }` )

        const snapshot = await uploadString( imgRef, image, 'data_url' )
        const urlRef = await getDownloadURL( imgRef )

        const data = await prisma.item.create( {
            data: {
                id: item_id,
                category,
                image: urlRef,
                price,
                desc,
                title,
                owner: {
                    connect: { id }
                }
            }
        } )

        res.send( { category, desc, urlRef, id } )

    } catch( e: any ) {  
        console.log( e ) 
        res.json( { error: e?.message } )
    }

}