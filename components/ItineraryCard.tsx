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
    isOpen: boolean;
    onOpen: () => void;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ item, isOpen, onOpen }) => {
    return (
        <div>
            <div className="card bg-white w-320 h-320 rounded-md p-4 cursor-pointer hover:bg-neutral-100" onClick={onOpen} >
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
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="bg-black bg-opacity-60 absolute inset-0" onClick={onOpen}></div>
                    <div className="modal bg-white w-3/4 h-3/4 rounded-md p-4 relative z-20">
                        <h2 className="flex justify-center font-bold text-3xl">
                            {item.type} from {item.startLocation} to {item.endLocation} <br />
                        </h2>
                        <h2 className="flex justify-center">{item.startDate} - {item.endDate}</h2>
                        <p>
                            <strong>Leaves at </strong> {item.startTime} from {item.startLocation}
                        </p>
                        <p>
                            <strong>Arrives at</strong> {item.endTime} from {item.endLocation}
                        </p>
                        <p>
                            <strong>Cost:</strong> {item.cost}
                        </p>
                        <span className="close absolute top-0 right-0 p-2" onClick={onOpen}>&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItineraryCard;
