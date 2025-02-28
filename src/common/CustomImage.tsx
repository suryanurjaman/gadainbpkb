import React from 'react';
import Mobil from "../assets/Hero/MOBIL.png"
import LogoWhite from "../assets/Hero/LOGO.png"
import Time from "../assets/Hero/TIME.png"
import Time2 from "../assets/Hero/24j.png"
import Chart from "../assets/Hero/chart.svg"
import Star from "../assets/Hero/star.svg"
import Bunga from "../assets/Hero/bunga.svg"
import Rp from "../assets/Hero/rp.svg"



const CustomImage: React.FC = () => {

    return (
        <div className=''>
            <div className='p-2'>
                <div className="flex flex-wrap">
                    {/* First Row */}
                    <div className='w-1/2'>
                        <div className='relative min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] flex justify-center items-center bg-orange-300'>
                            <div className=''>
                                <img
                                    className="object-contain w-[80%] mt-8 h-auto"
                                    src={Mobil}
                                    alt="Mega Finance"
                                />
                                <img
                                    className="absolute object-contain w-[40%] md:w-[40%] -top-0 right-4 md:left-0 mt-6 ml-6 h-auto"
                                    src={LogoWhite}
                                    alt="Mega Finance"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2'>
                        <div className='relative min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] flex justify-center items-center bg-amber-100 rounded-l-full font-sans font-semibold text-orange-400'>
                            <div className=''>
                                <img
                                    className="absolute object-contain bottom-4 md:bot-0 mt-4 mr-4 md:mr-8 right-0 w-[40%] md:w-[50%] h-auto"
                                    src={Time}
                                    alt="Mega Finance"
                                />
                                <img
                                    className="absolute object-contain top-4 mt-4 mr-4 md:mr-8 right-0 w-[20%] h-auto"
                                    src={Time2}
                                    alt="Mega Finance"
                                />
                                <p className="absolute italic object-contain top-[38%] ml-4 md:ml-8 left-0 text-md md:text-2xl">Proses Cepat</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {/* Second Row */}
                    <div className='w-1/2'>
                        <div className='relative min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] bg-neutral-600 rounded-se-[50%] font-sans text-orange-400 font-semibold'>
                            <div>
                                <img
                                    className="absolute object-contain bottom-6 right-6 w-[50%] md:w-[70%] h-auto"
                                    src={Chart}
                                    alt="Mega Finance"
                                />
                                <img
                                    className="absolute object-contain top-6 left-6 w-[12%] md:w-[16%] h-auto"
                                    src={Star}
                                    alt="Mega Finance"
                                />
                                <img
                                    className="absolute object-contain top-6 left-12 md:left-16 w-[12%] md:w-[16%] h-auto"
                                    src={Star}
                                    alt="Mega Finance"
                                />
                                <p className='absolute left-4 bottom-16 md:top-24 md:right-16 text-sm md:text-lg'>Pencairan Tinggi</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2'>
                        <div className='relative flex min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] justify-center items-center bg-orange-400 font-sans text-white font-semibold'>
                            <img
                                className="object-contain w-[35%] md:w-[50%] h-auto"
                                src={Rp}
                                alt="Mega Finance"
                            />
                            <img
                                className="absolute object-contain top-6 left-4 md:left-6 w-[30%] md:w-[35%] h-auto"
                                src={Bunga}
                                alt="Mega Finance"
                            />
                            <p className="absolute md:text-xl bottom-3 md:bottom-6 right-6">Pertahun</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomImage;
