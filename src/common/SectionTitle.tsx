import React from 'react';

interface SectionTitleProps {
    text: string;
    color?: string; // Menambahkan properti color opsional
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, color }) => {
    return (
        <p className={`font-bold text-sm font-sans ${color ? color : 'text-orange-400'}`}>
            {text}
        </p>
    );
};

export default SectionTitle;
