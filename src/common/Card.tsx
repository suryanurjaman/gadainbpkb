import React from 'react';

interface CardProps {
    title: string;
    description: string;
    icon: JSX.Element;
    className: string;
    textColor: string;
    isActive: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className, textColor, isActive }) => {
    return (
        <div className={`flex flex-col items-center p-8 rounded-xl shadow-lg ${className} transition-transform duration-300 ${isActive ? 'transform scale-105' : ''}`}>
            <div className="text-4xl mb-4">{icon}</div>
            <h2 className="text-2xl font-semibold mt-4 mb-4">{title}</h2>
            <p className={`text-sm md:text-base text-center ${textColor}`}>{description}</p>
        </div>
    );
};

export default Card;
