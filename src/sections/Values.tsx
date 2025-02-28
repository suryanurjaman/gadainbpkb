import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { MdArrowOutward, MdOutlineMoneyOff } from 'react-icons/md';
import { CiWallet } from 'react-icons/ci';
import { AiOutlineFund } from 'react-icons/ai';


const Values: React.FC = () => {
    return (
        <section id='layanan' className="relative mx-4 max-w-7xl mt-12 m-auto md:mx-auto px-4 py-12 rounded-2xl bg-gradient-to-b  flex flex-col justify-center text-start">
            <div className='flex justify-center items-center md:justify-start md:items-start flex-col m-auto md:w-[90%]'>
                <SectionTitle text='VALUES' />
                <div className='flex flex-col gap-8 md:gap-0 md:flex-row md:items-end'>
                    <h1 className=" text-center mx-12 md:mx-0 md:text-start text-3xl mt-4 font-sans md:text-6xl font-medium text-slate-800">
                        Kenapa Harus Mega Finance
                    </h1>
                    <div className='md:w-full md:flex md:justify-end'>
                        <p className="text-center md:text-start md:w-[66%] text-slate-600 font-sans">
                            Mega finance memberikan kemudahan akses bagi berbagai kalangan serta berbagai lapisan masyarakat untuk meraih kesuksesan finansial secara efektif, mudah dan terpercaya.
                        </p>
                    </div>
                </div>
                <div className='flex mt-16 gap-4'>
                    <div className='flex flex-col md:flex-row gap-4 md:w-full'>
                        <div className='border-2 md:w-[45%] '>
                            <div className='px-8 py-8 md:py-10'>
                                <MdOutlineMoneyOff size={80} />
                                <div className='flex flex-col gap-2 md:gap-4 mt-4 md:mt-12 mb-8 md:mb-16'>
                                    <h1 className='font-sans text-2xl md:text-3xl text-slate-800 font-semibold'>Proses cepat</h1>
                                    <p className='text-slate-600 font-sans'>Kami akan memproses mudah dan cepat hanya 1 hari</p>
                                </div>
                                <div className='rounded-full border-2 border-orange-300 w-12 h-12 flex items-center justify-center'>
                                    <MdArrowOutward size={18} className='text-orange-400' />
                                </div>
                            </div>
                        </div>
                        <div className='border-2 md:w-[45%] '>
                            <div className='px-8 py-8 md:py-10'>
                                <CiWallet size={80} />
                                <div className='flex flex-col gap-2 md:gap-4 mt-2 md:mt-12 mb-8 md:mb-16'>
                                    <h1 className='font-sans text-2xl md:text-3xl text-slate-800 font-semibold'>Angsuran Tepat</h1>
                                    <p className='text-slate-600 font-sans'>Kami hadir untuk memberikan solusi angsuran yang tepat dan terjangkau</p>
                                </div>
                                <div className='rounded-full border-2 border-orange-300 w-12 h-12 flex items-center justify-center'>
                                    <MdArrowOutward size={18} className='text-orange-400' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-yellow-950 md:w-[60%] rounded-tr-[150px]'>
                            <div className='px-8 py-8 md:py-10'>
                                <AiOutlineFund size={80} className='text-orange-400' />
                                <div className='flex flex-col gap-2 md:gap-4 mt-4 md:mt-12 mb-8 md:mb-16'>
                                    <h1 className='font-sans text-2xl md:text-3xl text-orange-400 font-semibold'>EXTRA PROTEKSI</h1>
                                    <p className='text-orange-400 md:mr-4 font-sans'>Kami akan selalu memberikan perlindungan ekstra terhadap konsumen kami dengan asuransi.</p>
                                </div>
                                <div className='rounded-full bg-orange-400 w-12 h-12 flex items-center justify-center'>
                                    <MdArrowOutward size={18} className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Values;
