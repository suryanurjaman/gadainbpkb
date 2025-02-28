import React from 'react';
import "../App.css";
import SectionTitle from '../common/SectionTitle';
import Orang from '../assets/Image/orang.png'
import Pattern from '../assets/aksen/Pattern.svg'


const Features: React.FC = () => {
    // const [cards, setCards] = useState<CardData[]>([
    //     {
    //         id: 1,
    //         title: 'Cair Tanpa Potongan',
    //         description: 'Nikmati pencairan dana tanpa potongan biaya admin atau tambahan lainnya. Dengan layanan kami, Anda akan mendapatkan jumlah penuh yang Anda ajukan tanpa potongan tersembunyi.',
    //         icon: <FaHeadset />,
    //         className: 'bg-white text-orange-500',
    //     },
    //     {
    //         id: 2,
    //         title: 'Bunga Rendah',
    //         description: 'Dapatkan bunga pinjaman yang rendah dan kompetitif. Kami menawarkan suku bunga yang lebih rendah dibandingkan penyedia lain, membantu Anda menghemat lebih banyak uang selama masa pinjaman.',
    //         icon: <FaWallet />,
    //         className: 'bg-orange-500 text-white',
    //     },
    //     {
    //         id: 3,
    //         title: 'Dana Cair Tinggi',
    //         description: 'Akses dana pinjaman yang tinggi untuk memenuhi kebutuhan besar Anda. Kami memberikan limit pinjaman yang fleksibel dan sesuai dengan kebutuhan finansial Anda.',
    //         icon: <FaShieldAlt />,
    //         className: 'bg-white text-orange-500',
    //     },
    // ]);

    // const [animationState, setAnimationState] = useState<'initial' | 'animated'>('initial');

    // const handleNext = () => {
    //     setCards((prevCards) => {
    //         const [first, ...rest] = prevCards;
    //         return [...rest, first];
    //     });

    //     setAnimationState('animated');
    //     setTimeout(() => {
    //         setAnimationState('initial');
    //     }, 100); // Duration should match with the transition duration
    // };

    return (
        <section
            id="About Us"
            className="overflow-hidden max-w-7xl mt-12 md:mx-auto py-12 rounded-2xl bg-gradient-to-b flex flex-col items-center justify-center text-center">
            <div className='flex flex-col items-center m-auto md:w-[90%]'>
                <SectionTitle text='ABOUT US' />
                <h2 className="font-sans md:w-[50%] mx-12 md:mx-0 text-3xl md:text-6xl font-semibold text-slate-800 mt-4 mb-8">Solusi Keuangan Andal dan Cepat</h2>
                {/* <span className="w-[80%] h-0.5 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-400 mb-8"></span> */}
                <p className="md:text-base mx-12 md:mx-0 text-slate-600 mb-8 md:mb-12 md:w-full md:max-w-md">
                    Temukan solusi finansial yang tepat dengan produk Mega Finance yang mengakomodasi kebutuhan Anda.
                </p>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 w-full px-4 md:mx-auto md:h-[480px]'>
                    <div className='relative bg-orange-400 md:w-1/3 md:h-full px-8 p-8 text-start'>
                        <img
                            className="absolute object-contain opacity-50 md:opacity-100 w-[80%] md:w-[100%] -bottom-44 -right-28  h-auto z-0"
                            src={Pattern}
                            alt="Mega Finance"
                        />
                        <h1 className='font-sans text-2xl md:text-5xl font-semibold text-orange-50 mt-4 mb-12'>Sejarah Mega Finance</h1>
                        <p className='md:text-base text-justify text-orange-50 w-full max-w-md'>Kami telah menghasilkan pelayanan berkualitas tinggi dengan penuh semangat sejak tahun 1995. Mega Finance terus berkembang dan berkembang dengan mengutamakan kepercayaan dan menciptakan pengalaman yang luar biasa.</p>
                        {/* <div className='flex justify-end items-end mt-12'>
                            <img src={Star} style={{ color: 'black' }} className='h-14' />
                            <img src={Star} style={{ color: 'black' }} className='h-14' />
                        </div> */}
                    </div>
                    <div className='relative overflow-hidden flex flex-col bg-orange-100 gap-4 md:rounded-bl-[150px] md:w-2/3 md:h-full text-start'>
                        <img
                            className="absolute object-contain w-[100%] bottom-0 md:top-28 md:-right-24 h-auto z-0"
                            src={Pattern}
                            alt="Mega Finance"
                        />
                        <div className='flex items-center mx-8 mt-12 mb-3 z-10'>
                            <h1 className='font-sans text-nowrap md:text-wrap md:w-[50%] text-2xl md:text-5xl font-semibold text-orange-400'>Tentang Mega Finance</h1>
                        </div>
                        <div className='flex flex-col md:flex-row text-justify h-full gap-4 z-10'>
                            <div className='md:w-1/3 flex rounded-bl-[150px] justify-center md:justify-start md:items-end '>
                                <img
                                    className="object-cover rounded-full md:rounded-bl-[150px] w-auto h-[200px] md:h-[300px]"
                                    src={Orang}
                                    alt="Mega Finance"
                                />
                            </div>
                            <div className='flex flex-col md:w-3/5 mx-8 md:mx-0 gap-4 mb-8 z-10'>
                                <p className='text-orange-400'>Sebagai bagian dari jaringan bisnis yang luas di bawah naungan CT Corp, Mega Finance telah menunjukkan komitmen yang kuat terhadap inovasi dalam sektor jasa keuangan, memperluas layanan pembiayaan melalui aplikasi Blicicil yang memberikan akses mudah dan cepat bagi berbagai produk pembiayaan dalam era digital.</p>
                                <p className='text-orange-400'>Perkembangan terus-menerus ini merupakan bagian dari upaya Mega Finance untuk terus memberikan layanan terbaik dan menghadirkan inovasi yang relevan, sejalan dengan visi perusahaan untuk menjadi perusahaan pembiayaan terkemuka yang memberikan layanan terbaik untuk meiningkatkan dan mendukung kesejahteraan masyarakat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex justify-center items-center gap-6 relative">
                {cards.map((card, index) => {
                    let transformClass = '';
                    let isActive = index === 1;
                    let hiddenClass = ''


                    if (index === 0 || index === 2) {
                        hiddenClass = 'hidden sm:block';
                    }

                    if (index === 0) {
                        transformClass = 'transform scale-90 -translate-x-8';
                    } else if (index === 2) {
                        transformClass = animationState === 'animated' ? 'transform scale-[80%] translate-x-12' : 'transform scale-90 translate-x-8';
                    } else if (index === 1) {
                        transformClass = 'transform scale-100 z-10';
                    }

                    return (
                        <div
                            key={card.id}
                            className={`flex-shrink-0 w-80 ${transformClass} ${hiddenClass} transition-transform duration-1000 ease-in-out`}
                        >
                            <Card
                                {...card}
                                className={`p-8 rounded-xl shadow-lg ${index === 1 ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white' : 'bg-white text-orange-500'}`}
                                isActive={isActive}
                                textColor={index === 1 ? 'text-white' : 'text-gray-600'}
                            />
                        </div>
                    );
                })}
            </div> */}
            {/* <div className="flex justify-center mt-8 gap-4">
                <button
                    className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
                    onClick={handleNext}
                >
                    <FaArrowRight className="text-xl" />
                </button>
            </div> */}
        </section >
    );
};

export default Features;
