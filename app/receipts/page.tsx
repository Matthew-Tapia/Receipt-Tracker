import FileUploader from "@/components/FileUploader";
import Layout from '@/components/layout'
import type { ReactElement } from 'react'
import ItineraryCard from "@/components/ItineraryCard";
import Modal from 'react-modal';


export default function Home() {

    const sampleData = {
        startDate: '2023-08-01',
        startTime: '12:30',
        startLocation: 'SFO',
        endDate: '2023-08-02',
        endTime: '12:40 PM',
        endLocation: 'LAX',
        cost: '$260',
        flightNum: 'DL 293',
        name: 'Flight from SFO to LAX',
        type: 'Flight'
    }
    return (
        <Layout>
            <main>
                <div className="py-8 flex flex-wrap gap-4 justify-center">
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                    <ItineraryCard item={sampleData}></ItineraryCard>
                </div>
            </main>
        </Layout>
    );
}
