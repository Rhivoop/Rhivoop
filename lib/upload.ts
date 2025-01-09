// lib/upload.ts
import { v2 as cloudinary } from 'cloudinary'

interface CloudinaryResult {
  secure_url: string
}

export async function uploadImage(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: 'properties',
        },
        (error: any, result: CloudinaryResult | undefined) => {
          if (error) reject(error)
          else if (result) resolve(result.secure_url)
          else reject(new Error('No result from Cloudinary'))
        }
      )
      .end(buffer)
  })
}