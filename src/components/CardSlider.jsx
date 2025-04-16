import React, { useState } from "react";
import userData from "../data/userData";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {MdEmail, MdPhone} from "react-icons/md";

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevious = () => {
        setCurrentIndex((index) => (index === 0 ? userData.length -1 : index -1));
    };

    const handleNext = () => {
        setCurrentIndex((index) => (index === userData.length -1 ? 0 : index +1));
    };

    const user = userData[currentIndex];

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <button
            onClick={handlePrevious} className="absolute left-8 bg-gray-700 text-white p-3 rounded-full"
            >
             <FiChevronLeft size={24} />
            </button>

            <div className="w-96 bg-white rounded-2xl shadow-x1 p-6 text-center">
                <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-1 flex items-center justify-center gap-2">
                    <MdEmail className="text-blue-600" />
                    {user.email}
                </p>
                <p className="text-gray-600 mb-1 flex items-center justify-center gap-2">
                    <MdPhone className="text-blue-600" />
                    {user.contact}
                </p>
                <div className="flex  flex-wrap justify-center gap-2">
                    {user.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                </div>

            </div>

            <button
            onClick={handleNext} 
            className="absolute right-8 bg-gray-700 text-white p-3 rounded-full"
            >
             <FiChevronRight size={24} />
            </button>

        </div>
    );
};

export default CardSlider;