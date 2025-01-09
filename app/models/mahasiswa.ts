"use server";
import { PrismaClient } from "@prisma/client";

// deklarasi variabel prisma
const prisma = new PrismaClient();

// tampil data
export async function getData() {
    // membuat orm
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
        where: {
            status: "Y"
        }
    });

    return mahasiswa;
}

// fungsi hapus data (update status Y ke N)
// function setUpdateStatus() 
export const setUpdateStatus = async(npm: string) =>
{
    await prisma.tb_mahasiswa.updateMany({
        where: {
          npm: npm
        },
        data: {
          status: 'N',
        },
      })
}