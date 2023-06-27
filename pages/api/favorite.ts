import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";

// test

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            const { currentUser } = 
        }

    } catch (error) {
        console.log(error)
        return res.status(405).end()
    }
}