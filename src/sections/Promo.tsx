import { useState } from 'react';
import { FormEvent } from 'react';
import SectionTitle from '../common/SectionTitle';

function Promo() {
  const [kota, setKota] = useState('');
  const [merkTipe, setMerkTipe] = useState('');
  const [model, setModel] = useState('');
  const [tahun, setTahun] = useState('');
  const [atasNama, setAtasNama] = useState(''); // State untuk Atas Nama BPKB
  const [pengajuanDana, setPengajuanDana] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappMessage = `Halo, saya ingin mengajukan pegadaian mobil dengan rincian berikut:%0a%0aAlamat Kota/Kabupaten: ${kota}%0aMerk dan Tipe Kendaraan: ${merkTipe}%0aModel Kendaraan: ${model}%0aTahun Kendaraan: ${tahun}%0aAtas Nama BPKB: ${atasNama}%0aRencana Pengajuan Dana: ${pengajuanDana}%0a%0aTerima kasih.`;
    window.open(`https://wa.me/+62895326339675?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section
      id="pengajuan"
      className="relative max-w-7xl mt-12 md:mx-auto py-12 rounded-2xl bg-gradient-to-b flex flex-col items-center justify-center text-center"
    >
      <div className='flex flex-col items-center m-auto md:w-[90%]'>

        <article className="mb-10 flex flex-col md:flex-row items-center justify-center w-full">
          <div className='flex flex-col text-start mx-4'>
            <SectionTitle text='PENGAJUAN' />
            <h2 className="mb-4 mt-4 font-sans text-5xl font-medium text-gray-800 md:text-6xl max-w-full">
              Pengajuan Pegadaian Mobil
            </h2>
          </div>
          <div className="md:w-[80%] rounded-full border-t-2 border-gray-200"></div>
        </article>

        <div className='bg-slate-100  p-4 md:p-4 w-full'>
          <div className="flex flex-col gap-4 md:flex-row w-full">
            <div className="w-full md:w-full bg-gray-50 p-4 md:p-8 rounded-lg shadow-xl">
              <div className="mb-4 font-sans text-start md:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold text-gray-800">
                  Ajukan Pegadaian
                </h3>
                <p className='text-slate-600 font-sans'>Silahkan isi form simulasi pembiayaan & pengajuan anda, nominal bersifat estimasi, dan ajukan untuk cek angsuran sesuai mobil yang di jaminkan</p>
              </div>


              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

                <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                  <div className="md:w-1/2">
                    <label className="block mb-2 font-sans text-lg text-start font-bold text-gray-900" htmlFor="kota">
                      Alamat Kota/Kabupaten
                    </label>
                    <input
                      type="text"
                      id="kota"
                      className="w-full px-4 font-sans py-4 text-sm text-start border border-gray-300 rounded-md"
                      value={kota}
                      onChange={(e) => setKota(e.target.value)}
                      required
                      placeholder='Alamat Kota/Kabupaten'
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block font-sans mb-2 text-lg text-start font-bold text-gray-900" htmlFor="merkTipe">
                      Merk dan tipe Kendaraan
                    </label>
                    <input
                      type="text"
                      id="merkTipe"
                      className="w-full px-4 text-sm font-sans py-4 border text-start border-gray-300 rounded-md"
                      value={merkTipe}
                      onChange={(e) => setMerkTipe(e.target.value)}
                      required
                      placeholder='Merk dan tipe Kendaraan'
                    />
                  </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                  <div className="md:w-1/2">
                    <label className="block font-sans mb-2 text-lg text-start font-bold text-gray-900" htmlFor="model">
                      Model Kendaraan
                    </label>
                    <input
                      type="text"
                      id="model"
                      className="w-full px-4 text-sm font-sans py-4 text-start border border-gray-300 rounded-md"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      required
                      placeholder='Model Kendaraan'
                    />
                  </div>
                  <div className="relative md:w-1/2">
                    <label className="block font-sans mb-2 text-lg text-start font-bold text-gray-900" htmlFor="tahun">
                      Tahun Kendaraan
                    </label>
                    <select
                      id="tahun"
                      className="w-full px-4 bg-white text-sm font-sans py-4 text-start border border-gray-300 rounded-md pr-8 appearance-none"
                      value={tahun}
                      onChange={(e) => setTahun(e.target.value)}
                      style={{ color: tahun === '' ? '#9CA3AF' : '#000' }} // Menambahkan style untuk warna placeholder
                    >
                      <option value="" disabled>Pilih Tahun</option>
                      {Array.from({ length: 2030 - 2005 + 1 }, (_, i) => 2005 + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <span className="absolute inset-y-0 top-8 right-0 flex items-center pr-3 pointer-events-none">
                      {/* Contoh ikon chevron dari Font Awesome */}
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </div>
                </div>


                <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                  <div className="relative md:w-1/2">
                    <label className="block font-sans mb-2 text-lg text-start font-bold text-gray-900" htmlFor="atasNama">
                      Pilih Atas Nama BPKB
                    </label>
                    <select
                      id="atasNama"
                      className="w-full px-4 bg-white text-sm font-sans py-4 text-start border border-gray-300 rounded-md pr-8 appearance-none"
                      value={atasNama}
                      onChange={(e) => setAtasNama(e.target.value)}
                      style={{ color: atasNama === '' ? '#9CA3AF' : '#000' }} // Menambahkan style untuk warna placeholder
                    >
                      <option value="" disabled>Pilih Atas Nama</option>
                      <option value="sendiri">Sendiri</option>
                      <option value="orang tua">Orang Tua</option>
                      <option value="orang lain">Orang Lain</option>
                    </select>
                    <span className="absolute inset-y-0 top-8 right-0 flex items-center pr-3 pointer-events-none">
                      {/* Contoh ikon chevron dari Font Awesome */}
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="md:w-1/2">
                    <label className="block font-sans mb-2 text-lg text-start font-bold text-gray-900" htmlFor="pengajuanDana">
                      Rencana Pengajuan Dana
                    </label>
                    <input
                      type="text"
                      id="pengajuanDana"
                      className="w-full font-sans text-sm px-4 py-4 border text-start border-gray-300 rounded-md"
                      value={pengajuanDana}
                      onChange={(e) => setPengajuanDana(e.target.value)}
                      required
                      placeholder='Rencana Pengajuan Dana'
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-4 font-sans text-lg font-bold text-white bg-orange-500 rounded-md hover:bg-orange-600"
                >
                  Ajukan Sekarang
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
