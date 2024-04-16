import { response } from "express"

export const getdata=async()=>{
   const response = await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/blogs')
   return response.json()
}
export const getmessage=async()=>{
   const response =   await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/message')
   return response.json()
}

