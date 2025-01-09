// lib/properties.ts
import prisma from './prisma'

export async function getProperties() {
  return await prisma.property.findMany({
    orderBy: {
     
    }
  })
}
