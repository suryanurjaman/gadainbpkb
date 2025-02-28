import React from 'react';
import "../App.css";
import StoreLinks, { BtnTypes } from '../common/StoreLinks';
import ombak1 from "../assets/aksen/ombak1.svg"
import ombak2 from "../assets/aksen/ombak2.svg"
import pengajuan from "../assets/pengajuan1.jpg"
import hand from "../assets/banner/tangan.svg"


const Banner: React.FC = () => {
    return (
        <section
            id="About Us"
            className=" max-w-7xl mt-12 md:mx-auto py-12 rounded-2xl bg-gradient-to-b flex flex-col items-center justify-center text-center">
            <div className='relative flex flex-col items-center m-auto bg-orange-400 md:w-[90%]'>
                <img
                    className="absolute object-contain w-[70%] md:w-[30%] top-0 left-0 h-auto z-0"
                    src={ombak1}
                    alt="Mega Finance"
                />
                <img
                    className="absolute object-contain md:w-[35%] bottom-0 left-50 h-auto z-0"
                    src={ombak2}
                    alt="Mega Finance"
                />
                <div className='flex flex-col md:flex-row w-full h-auto md:h-[450px]'>
                    <div className='flex flex-col px-4 md:pl-20 pt-8 md:py-20 text-center md:text-start items-center md:items-start'>
                        <h1 className="font-sans text-4xl md:text-6xl font-medium text-white leading-tight">
                            Pencairan dana jauh <br /> jadi lebih <span className='italic font-serif'>mudah</span>
                        </h1>
                        <p className='font-sans text-white w-full md:w-[70%] mb-4 md:mb-8 mt-4 md:mt-6'>
                            GadainBPKB hadir untuk memberikan kemudahan dan kecepatan dalam setiap langkah
                            pembiayaan Anda, dengan layanan yang dapat diandalkan dan profesional.
                        </p>
                        <StoreLinks bgColor='bg-white' textColor='text-orange-400' type={BtnTypes.Standard} />
                    </div>
                    <div className='relative overflow-hidden w-full flex justify-end items-end md:w-[50%] h-auto md:h-[450px] mt-8 md:mt-0'>
                        {/* <div className='flex justify-center md:justify-start h-[150px] md:h-1/3'>
                            <TiStarburst className='w-[100px] md:w-[170px] h-auto text-orange-200 -mr-4 md:-mr-8' />
                            <TiStarburst className='w-[100px] md:w-[170px] h-auto text-orange-200' />
                        </div> */}
                        <div className='hidden md:block w-full md:w-[95%] h-[200px] absolute md:h-[70%] right-3 -bottom-4 rounded-tr-[50%] bg-gray-800 opacity-[24%]'></div>
                        <div className=' overflow-hidden relative w-[100%] md:right-0 md:w-[95%] h-auto p-8 md:h-[70%] md:rounded-tr-[50%] md:bg-orange-200 z-10'>

                            <img
                                className=" block md:hidden object-cover w-full h-full z-10 md:rounded-lg"
                                src={pengajuan}
                                alt="Mega Finance"
                            />
                            <img
                                className="hidden md:block absolute object-contain w-[70%] md:w-[80%] bottom-0 left-0 h-auto z-10"
                                src={hand}
                                alt="Mega Finance"
                            />
                            {/* <img
                                className="absolute object-contain w-[70%] md:w-[80%] top-0 left-0 h-auto z-0 rotate-[30%]"
                                src={ombak1}
                                alt="Mega Finance"
                            /> */}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
