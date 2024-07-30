import React from 'react';

interface TimelineItemProps {
    year: string;
    description: string;
    hidden: string;
    isLastItem: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, description, hidden, isLastItem }) => {
    return (
        <div className={`mt-8 flex ${isLastItem ? 'w-[70%]' : 'w-full'} flex-col gap-8 overflow-hidden xl:h-120`}>
            <div className="flex items-center">
                <div className="flex flex-row bg-white items-center justify-center w-24 h-8 gap-2 rounded-lg custom-shadow">
                    <div>
                        <div className="w-5 h-5 border-solid border border-orange-300 rounded-full flex justify-center items-center">
                            <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <p>{year}</p>
                    </div>
                </div>
                <div className={`${hidden} flex-grow border-t-2 border-gray-500`}></div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-orange-300">{year}</h1>
            <p className={`${isLastItem ? 'w-full' : 'w-full md:w-[65%]'}`}>{description}</p>
        </div>
    );
};

export default TimelineItem;
