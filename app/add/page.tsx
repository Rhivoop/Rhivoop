"use client"
import React, { useState } from 'react'
import Head from 'next/head'

export default function Page() {
  const [getNPM, setNPM] = useState("");


  const saveData =() =>{
   // alert(getNPM)
    if(getNPM=="")
    {
     alert("Lengkapi Seluruh Data !");
    }
    // jika seluruh komponen terisi
    else
    {
      alert("Ok");
    }
  };

  return (
    <>
      <Head>
        <title>Tambah Data Mahasiswa</title>
      </Head>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div>Npm</div>
        <div className='col-span-4'>
          <input
            type="text"
            placeholder="Isi Npm"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setNPM(e.target.value)}
          />
        </div>

        <div className='col-start-1'>Nama</div>
        <div className='col-span-4'>
          <input
            type="text"
            placeholder="Isi Nama Mahasiswa"
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className='col-start-1'>Jurusan</div>
        <div className='col-span-4'>
          <select defaultValue={""} className="select select-primary w-full">
            <option value={""} disabled>Pilih Jurusan Mahasiswa</option>
            <option value={"Informatika"}>Informatika</option>
            <option value={"Sistem Informasi"}>Sistem Informasi</option>
            <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
            <option value={"Teknik Komputer"}>Teknik Komputer</option>
          </select>
        </div>

        <div className='col-start-2 col-span-2'>
          <button className="btn btn-outline btn-secondary mr-2" onClick={saveData}>Simpan</button>
          <button className="btn btn-outline btn-primary ml-2">Batal</button> 
        </div>
      </div>
    </>
  )
}
