'use client';
import React, { useState } from 'react';
import './styles.css'


interface ItineraryJSON {
    date: string,
    startTime: string,
    endTime: string,
    startLocation: string,
    endLocation: string
}

interface CreateCardFormProps {
    itineraryData: ItineraryJSON;
}

const CreateCardForm: React.FC<CreateCardFormProps> = ({ itineraryData }) => {
    const [date, setDate] = useState<string>(itineraryData.date)
    const [startTime, setStartTime] = useState<string>(itineraryData.startTime)
    const [endTime, setEndTime] = useState<string>(itineraryData.endTime)
    const [startLocation, setStartLocation] = useState<string>(itineraryData.startLocation)
    const [endLocation, setEndLocation] = useState<string>(itineraryData.endLocation)


    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-black bg-opacity-60 absolute inset-0"></div>
            <div className="modal bg-white w-3/4 h-3/4 rounded-md p-4 relative z-20 flex flex-col justify-between">
                <h1 className="flex justify-center text-4xl font-bold mb-4">Enter details:</h1>
                <form id="cardinfo" className='flex flex-row gap-4 items-center justify-between'>
                    <p><strong>Date: </strong><input onChange={(e) => { setDate(e.target.value) }} type="text" value={date}></input></p>
                    <p><strong>Start time:</strong><input onChange={(e) => { setStartTime(e.target.value) }} type="text" value={startTime}></input></p>
                    <p><strong>End time:</strong><input onChange={(e) => { setEndTime(e.target.value) }} type="text" value={endTime}></input></p>
                    <p><strong>Start location:</strong><input onChange={(e) => { setStartLocation(e.target.value) }} type="text" value={startLocation}></input></p>
                    <p><strong>End location:</strong><input onChange={(e) => { setEndLocation(e.target.value) }} type="text" value={endLocation}></input></p>
                </form>
                <button className="bg-neutral-200 p-4" type="submit" form="cardinfo">Save</button>

            </div>
        </div>



    );
}

export default CreateCardForm;
