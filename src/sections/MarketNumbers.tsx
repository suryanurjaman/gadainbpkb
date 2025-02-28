import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SiGoogledocs } from 'react-icons/si';
import { BsClipboard2Check, BsTelephone } from 'react-icons/bs';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import BG from '../assets/BG/BACKGROUND.png'

const MarketNumbers: React.FC = () => {

    return (
        <section className="overflow-hidden max-w-[100%] mt-12 md:mx-auto bg-gradient-to-b flex flex-col justify-center text-start">
            <div className='flex flex-col'>
                <div className='flex flex-col md:flex-row-reverse items-center justify-center md:h-[450px] p-8 md:text-start md:p-16 bg-gradient-to-br from-orange-900 via-orange-950 to-orange-800 w-full h-auto bg-cover bg-no-repeat gap-20 md:gap'
                    style={{ backgroundImage: `url(${BG})` }}>

                    <div className='flex flex-col md:flex-row md:items-start'>
                        <div className='flex flex-col text-center md:text-start'>
                            <SectionTitle color='text-white' text='NUMBERS' />
                            <h1 className="text-5xl mt-4 font-sans md:text-6xl font-medium text-white md:leading-tight">
                                Langkah Mudah Pengajuan
                            </h1>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center mb-16 md:mb-0'>
                        <div className='relative flex flex-col gap-20 md:flex-row md:gap-4 '>
                            <div className='hidden md:block absolute top-[59px] left-[0%] right-1/2 mx-auto border-t border-white'></div>
                            <div className='hidden md:block absolute top-[59px] right-[16%] left-1/2 mx-auto border-t border-white'></div>

                            {/* Section 1 */}
                            <div className='flex flex-row md:flex-col gap-8 md:gap-4'>
                                <div className='flex flex-col gap-4 md:items-start'>
                                    <SiGoogledocs className='text-white text-4xl' />
                                    <span className='w-4 h-4 ml-[10px] md:ml-0 rounded-full bg-white' />
                                </div>
                                <div className='text-white font-sans top-20 flex flex-col md:items-center'>
                                    <div className='flex flex-row gap-2'>
                                        <h1 className='text-2xl md:text-xl font-bold'>1.</h1>
                                        <div>
                                            <h1 className='text-2xl md:text-xl font-bold md:whitespace-nowrap'>Isi Form Secara Online</h1>
                                            <p className='text-lg md:text-base mt-4'>Isi form pada bagian pengajuan dengan data yang valid dan lengkap untuk mempermudah proses verifikasi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className='flex flex-row md:flex-col gap-8 md:gap-4'>
                                <div className='flex flex-col gap-4 md:items-start'>
                                    <BsTelephone className='text-white text-4xl' />
                                    <span className='w-4 h-4 ml-[10px] md:ml-0 rounded-full bg-white' />
                                </div>
                                <div className='text-white font-sans top-20 flex flex-col md:items-center'>
                                    <div className='flex flex-row gap-2'>
                                        <h1 className='text-2xl md:text-xl font-bold'>2.</h1>
                                        <div>
                                            <h1 className='text-2xl md:text-xl font-bold md:whitespace-nowrap'>Kami akan menghubungimu</h1>
                                            <p className='text-lg md:text-base mt-4'>Isi form pada bagian pengajuan dengan data yang valid dan lengkap untuk mempermudah proses verifikasi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className='flex flex-row md:flex-col gap-8 md:gap-4'>
                                <div className='flex flex-col gap-4 md:items-start'>
                                    <BsClipboard2Check className='text-white text-4xl' />
                                    <span className='w-4 h-4 ml-[10px] md:ml-0 rounded-full bg-white' />
                                </div>
                                <div className='text-white font-sans top-20 flex flex-col md:items-center'>
                                    <div className='flex flex-row gap-2'>
                                        <h1 className='text-2xl md:text-xl font-bold'>3.</h1>
                                        <div>
                                            <h1 className='text-2xl md:text-xl font-bold md:whitespace-nowrap'>Survei dan Validasi Aset</h1>
                                            <p className='text-lg md:text-base mt-4'>Kami akan melakukan survei dan validasi aset Anda.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className='flex flex-row md:flex-col gap-8 md:gap-4'>
                                <div className='flex flex-col gap-4 md:items-start'>
                                    <FaMoneyBill1Wave className='text-white text-4xl' />
                                    <span className='w-4 h-4 ml-[10px] md:ml-0 rounded-full bg-white' />
                                </div>
                                <div className='text-white font-sans top-20 flex flex-col md:items-center'>
                                    <div className='flex flex-row gap-2'>
                                        <h1 className='text-2xl md:text-xl font-bold'>4.</h1>
                                        <div>
                                            <h1 className='text-2xl md:text-xl font-bold md:whitespace-nowrap'>Pencairan Dana</h1>
                                            <p className='text-lg md:text-base mt-4'>Jika semua syarat terpenuhi, dana akan segera dicairkan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MarketNumbers;
