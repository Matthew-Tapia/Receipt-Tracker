'use client';
import FileUploader from "@/components/FileUploader";
import Layout from '@/components/layout'
import type { ReactElement } from 'react'
import ItineraryCard from "@/components/ItineraryCard";
import { useState, useEffect } from 'react';

export default function Home() {
    // const sampleData = {
    //     startDate: '2023-08-01',
    //     startTime: '12:30',
    //     startLocation: 'SFO',
    //     endDate: '2023-08-02',
    //     endTime: '12:40 PM',
    //     endLocation: 'LAX',
    //     cost: '$260',
    //     flightNum: 'DL 293',
    //     name: 'Flight from SFO to LAX',
    //     type: 'Flight'
    // }
    // const sampleData2 = {
    //     startDate: '2023-08-01',
    //     startTime: '10:30 AM',
    //     startLocation: 'SFO',
    //     endDate: '2023-08-02',
    //     endTime: '12:40 PM',
    //     endLocation: 'JFK',
    //     cost: '$333',
    //     flightNum: 'DL 293',
    //     name: 'Flight from SFO to JFK',
    //     type: 'Flight'
    // }
    const [itineraryItems, setItineraryItems] = useState<any[]>([]);
    const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        if (openModalIndex === index) {
            setOpenModalIndex(null);
        } else {
            setOpenModalIndex(index);
        }
    };
    useEffect(() => {
        const data = localStorage.getItem('components');
        if (data) {
            setItineraryItems(JSON.parse(data));
        }
    }, []);
    // const itineraryItems = Array(10).fill(sampleData);
    // itineraryItems.push(sampleData2)

    return (
        <Layout>
            <main>
                <div className="py-8 flex flex-wrap gap-4 justify-center">
                    {itineraryItems.map((item, index) => (
                        <ItineraryCard 
                            key={index} 
                            item={item} 
                            isOpen={openModalIndex === index} 
                            onOpen={() => handleOpen(index)}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
}
