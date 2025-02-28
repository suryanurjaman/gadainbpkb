import React, { useState } from "react";
import "../App.css";
import SectionTitle from "../common/SectionTitle";

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Persyaratan?",
            answer: (
                <div className="text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
                    <div className="flex flex-row justify-center items-center md:justify-normal md:items-start">
                        <ul className="list-disc pl-16 md:pl-5">
                            <li>KTP Pemohon & Pasangan (Jika sudah menikah)</li>
                            <li>Kartu Keluarga</li>
                            <li>Rekening Listrik / PBB</li>
                        </ul>
                    </div>
                    <div className="flex items-start">
                        <ul className="list-disc pl-16 md:pl-5">
                            <li>Bukti Penghasilan / rekening koran 3 bulan terakhir</li>
                            <li>STNK</li>
                            <li>BPKB</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            question: "Bagaimana cara mengajukan pinjaman BPKB mobil?",
            answer:
                "Untuk pengajuan pinjaman dengan BPKB mobil , Anda dapat mengisi formulir pengajuan di situs web kami atau mengunjungi cabang terdekat. Pastikan Anda memiliki dokumen-dokumen yang diperlukan dan informasi kendaraan yang lengkap.",
        },
        {
            question: "Berapa lama proses penggadaian mobil?",
            answer:
                "Proses penggadaian mobil biasanya memakan waktu antara 1 hingga 3 hari kerja.",
        },
        {
            question: "Bagaimana saya bisa melacak status pengajuan saya?",
            answer: "Setelah mengajukan penggadaian, Anda akan menerima nomor referensi yang dapat digunakan untuk melacak status pengajuan Anda melalui situs web kami atau menghubungi layanan pelanggan kami.",
        }
    ];

    return (
        <section className="relative mx-4 max-w-7xl mt-12 md:mx-auto px-4 py-12 rounded-2xl bg-gradient-to-b  flex flex-col justify-center">
            <div className="md:flex md:m-auto md:w-[90%]">
                <div className="flex flex-col md:flex-row md:w-full md:y-1">
                    <div className="md:w-[50] text-center md:text-start md:pr-10">
                        <SectionTitle text="FAQ" />
                        <h1 className="text-2xl mt-4 font-sans md:text-6xl font-medium text-slate-800">
                            Frequently asked question
                        </h1>
                    </div>
                    <div className="md:w-[70%]">
                        <ul className="flex flex-col">
                            {questions.map((item, index) => (
                                <li
                                    key={index}
                                    className="mb-4 border-b-2 p-4 md:border-b-2"
                                    onClick={() => handleToggle(index)}
                                >
                                    <h2 className="flex flex-row md:flex-row justify-between items-center font-sans gap-4 md:mr-2 font-semibold text-xl py-8 cursor-pointer">
                                        <span className="w-3/4 nowrap">{item.question}</span>
                                        <svg
                                            className={`fill-current h-8 w-8 text-slate-600 transform transition-transform duration-500 ${activeIndex === index ? "rotate-180" : ""
                                                }`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                                        </svg>
                                    </h2>
                                    <div
                                        className={`accordion-content text-justify overflow-hidden transition-all duration-500 ${activeIndex === index ? "pb-4" : "max-h-0 p-0"
                                            }`}
                                    >
                                        <div className="mr-10 font-sans text-slate-600">
                                            {typeof item.answer === 'string' ? (
                                                <p>{item.answer}</p>
                                            ) : (
                                                item.answer
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
