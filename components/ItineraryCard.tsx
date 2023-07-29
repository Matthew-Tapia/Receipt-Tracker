'use client';
import React, { useState } from 'react';

interface ItineraryItem {
    startDate: string;
    startTime: string;
    startLocation: string;
    endDate: string;
    endTime: string;
    endLocation: string;
    cost: string;
    flightNum: string;
    name: string;
    type: string;
}

interface ItineraryCardProps {
    item: ItineraryItem;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    return (
        <div className="card bg-white w-320 h-320 rounded-md p-4 cursor-pointer hover:bg-neutral-100" onClick={toggleModal} >
            {item.type} from {item.startLocation} to {item.endLocation}
            <p>
                <strong>Leaves at </strong> {item.startTime}
            </p>
            <p>
                <strong>Arrives at</strong> {item.endTime}
            </p>
            <p>
                <strong>Cost:</strong> {item.cost}
            </p>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>

                    </div>
                </div>
            )}
        </div>
    );
}

export default ItineraryCard