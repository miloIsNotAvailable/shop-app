import { Request, Response } from "express";

export default function handler( req: Request, res: Response ) {

    res.send( { name: 'john Doe' } )
}