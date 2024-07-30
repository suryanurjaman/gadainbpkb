import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Ikon centang dari react-icons
import { MdDescription } from 'react-icons/md'; // Ikon deskripsi dari react-icons

const Requirements: React.FC = () => {
    const requirements = [
        {
            text: "KTP Pemohon & Pasangan (Jika sudah menikah)",
            icon: <FaCheckCircle className="text-green-600 h-6 w-6" />
        },
        {
            text: "Kartu Keluarga",
            icon: <MdDescription className="text-blue-600 h-6 w-6" />
        },
        {
            text: "Rekening Listrik / PBB",
            icon: <FaCheckCircle className="text-green-600 h-6 w-6" />
        },
        {
            text: "Bukti Penghasilan",
            icon: <MdDescription className="text-blue-600 h-6 w-6" />
        },
        {
            text: "STNK",
            icon: <FaCheckCircle className="text-green-600 h-6 w-6" />
        },
        {
            text: "BPKB",
            icon: <MdDescription className="text-blue-600 h-6 w-6" />
        }
    ];

    return (
        <section className="bg-orange-50 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
                    Persyaratan Mudah
                </h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg lg:text-xl">
                    Pinjaman dana Anda bisa langsung diproses dengan menyiapkan dokumen di bawah ini:
                </p>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-300 opacity-30 rounded-lg -z-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {requirements.map((item, index) => (
                            <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex items-center justify-center w-12 h-12 bg-orange-200 rounded-full mr-4">
                                    {item.icon}
                                </div>
                                <span className="text-gray-800 text-base md:text-lg lg:text-xl">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requirements;
