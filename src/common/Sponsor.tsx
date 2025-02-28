import React from 'react';
import Mega from "../assets/logos/mega.png"

const Sponsor: React.FC = () => {
    const imagesArray = Array(4).fill(0);
    return (
        <section className=''>
            <div className="flex-row md:flex-row mt-8 pb-8 md:px-20 max-w-7xl m-auto flex gap-8 md:gap-56 justify-center border-orange-200 items-center space-x-4 border-y-2 py-8 md:py-12">
                {imagesArray.map((_, index) => (
                    <div key={index}>
                        <img
                            className=" opacity-80 w-16 md:w-24 h-auto"
                            src={Mega}
                            alt={`Mega Finance ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Sponsor;
