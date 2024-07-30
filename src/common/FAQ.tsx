import React, { useState } from "react";
import "../App.css";

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Persyaratan?",
            answer: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-900">
                    <div className="flex items-start">
                        <ul className="list-disc pl-5">
                            <li>KTP Pemohon & Pasangan (Jika sudah menikah)</li>
                            <li>Kartu Keluarga</li>
                            <li>Rekening Listrik / PBB</li>
                        </ul>
                    </div>
                    <div className="flex items-start">
                        <ul className="list-disc pl-5">
                            <li>Bukti Penghasilan</li>
                            <li>STNK</li>
                            <li>BPKB</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            question: "Bagaimana cara mengajukan penggadaian mobil?",
            answer:
                "Untuk mengajukan penggadaian mobil, Anda dapat mengisi formulir pengajuan di situs web kami atau mengunjungi cabang terdekat. Pastikan Anda memiliki dokumen-dokumen yang diperlukan dan informasi kendaraan yang lengkap.",
        },
        {
            question: "Berapa lama proses penggadaian mobil?",
            answer:
                "Proses penggadaian mobil biasanya memakan waktu antara 1 hingga 3 hari kerja, tergantung pada kelengkapan dokumen dan persetujuan dari pihak kami.",
        },
        {
            question: "Apa yang harus saya lakukan jika saya tidak bisa membayar cicilan?",
            answer:
                "Jika Anda menghadapi kesulitan dalam membayar cicilan, segera hubungi tim layanan pelanggan kami untuk mendiskusikan opsi yang tersedia. Kami akan berusaha mencari solusi terbaik untuk situasi Anda.",
        },
        {
            question: "Bagaimana saya bisa melacak status pengajuan saya?",
            answer: "Setelah mengajukan penggadaian, Anda akan menerima nomor referensi yang dapat digunakan untuk melacak status pengajuan Anda melalui situs web kami atau menghubungi layanan pelanggan kami.",
        },
        {
            question: "Apa yang terjadi jika saya kehilangan BPKB atau STNK?",
            answer: "Jika Anda kehilangan BPKB atau STNK, segera laporkan kepada kami dan juga ke pihak berwenang. Kami akan membantu Anda dalam proses penggantian dokumen yang hilang.",
        },
    ];

    return (
        <main className="p-5 mt-8 bg-light-blue">
            <div className="flex justify-center items-start my-2">
                <div className="w-full sm:w-10/12 md:w-full my-1">
                    <h2 className="text-4xl font-semibold text-orange-500 mb-8">
                        Pertanyaan yang sering ditanyakan
                    </h2>
                    <ul className="flex flex-col">
                        {questions.map((item, index) => (
                            <li
                                key={index}
                                className="bg-white rounded-xl my-2 shadow-lg"
                                onClick={() => handleToggle(index)}
                            >
                                <h2 className="flex flex-row justify-between items-center font-semibold p-8 cursor-pointer">
                                    <span>{item.question}</span>
                                    <svg
                                        className={`fill-current text-orange-700 h-6 w-6 transform transition-transform duration-500 ${activeIndex === index ? "rotate-180" : ""
                                            }`}
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                                    </svg>
                                </h2>
                                <div
                                    className={`accordion-content border-l-2 rounded-b-xl border-orange-600 overflow-hidden transition-all duration-500 ${activeIndex === index ? "p-3" : "max-h-0 p-0"
                                        }`}
                                >
                                    <div className="text-gray-900">
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
        </main>
    );
};

export default FAQ;
