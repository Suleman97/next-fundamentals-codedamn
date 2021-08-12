// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken';
import {NextApiRequest, NextApiResponse} from 'next'


const KEY = "bkdjshadkjbibakjgb"
export default function (req: NextApiRequest, res: NextApiResponse) {
  // res.status(200).json({ name: 'John Doe' })

  if(!req.body){
    res.statusCode= 404
    res.end("Error")
    return
  }
  const {username, password} = req.body

  res.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    },
    KEY
    )
  })
}
