import React, { useState } from 'react';
import Card from '../common/Card';
import { FaHeadset, FaWallet, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import "../App.css";

interface CardData {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
    className: string;
}

const Features: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>([
        {
            id: 1,
            title: 'Cair Tanpa Potongan',
            description: 'Nikmati pencairan dana tanpa potongan biaya admin atau tambahan lainnya. Dengan layanan kami, Anda akan mendapatkan jumlah penuh yang Anda ajukan tanpa potongan tersembunyi.',
            icon: <FaHeadset />,
            className: 'bg-white text-orange-500',
        },
        {
            id: 2,
            title: 'Bunga Rendah',
            description: 'Dapatkan bunga pinjaman yang rendah dan kompetitif. Kami menawarkan suku bunga yang lebih rendah dibandingkan penyedia lain, membantu Anda menghemat lebih banyak uang selama masa pinjaman.',
            icon: <FaWallet />,
            className: 'bg-orange-500 text-white',
        },
        {
            id: 3,
            title: 'Dana Cair Tinggi',
            description: 'Akses dana pinjaman yang tinggi untuk memenuhi kebutuhan besar Anda. Kami memberikan limit pinjaman yang fleksibel dan sesuai dengan kebutuhan finansial Anda.',
            icon: <FaShieldAlt />,
            className: 'bg-white text-orange-500',
        },
    ]);

    const [animationState, setAnimationState] = useState<'initial' | 'animated'>('initial');

    const handleNext = () => {
        setCards((prevCards) => {
            const [first, ...rest] = prevCards;
            return [...rest, first];
        });

        setAnimationState('animated');
        setTimeout(() => {
            setAnimationState('initial');
        }, 100); // Duration should match with the transition duration
    };

    return (
        <section
            id="About Us"
            className="relative mx-4 max-w-7xl md:mx-auto px-4 py-12 rounded-2xl bg-gradient-to-b  flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-5xl font-semibold text-orange-500 mb-2 ">KENAPA HARUS DI MEGA FINANCE</h2>
            <span className="w-[80%] h-0.5 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-400 mb-8"></span>
            <p className="text-sm md:text-lg text-gray-600 mb-12 w-full max-w-4xl">
                Temukan solusi finansial yang tepat dengan produk Mega Finance yang mengakomodasi kebutuhan Anda, memberikan kemudahan akses bagi berbagai kalangan serta berbagai lapisan masyarakat untuk meraih kesuksesan finansial secara lebih efektif, mudah dan terpercaya.
            </p>
            <div className="flex justify-center items-center gap-6 relative">
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
            </div>
            <div className="flex justify-center mt-8 gap-4">
                <button
                    className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
                    onClick={handleNext}
                >
                    <FaArrowRight className="text-xl" />
                </button>
            </div>
        </section>
    );
};

export default Features;
