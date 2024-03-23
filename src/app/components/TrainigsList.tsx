
'use client';
import { useContext, useEffect, useState } from "react";
import TrainigBubble from "./TrainigBubble";
import { AppDataContext } from "../lesson/[slug]/data-provider";
// import Image from "next/image";
// import { TypeAnimation } from 'react-type-animation';
// import Answer from "./Answer";

export default function TrainigsList(props: any) {
    const { state, actions } = useContext(AppDataContext);
    const [currentTrainig, setCurrentTraining] = useState(0);
    const [startTraining, setStartTraining] = useState(false);
    const [trainigData, setTrainigData] = useState([] as any);
    const [allTrainings, _] = useState(props);
   
    const start = () => {
        setStartTraining(true);
        actions.setAppData({currentBubble: 0, limit: Object.keys(props).length});
    }

    useEffect(() => {
        const fetchDataForTrainigs = async () => {
            try {
                console.log(`${process.env.NEXT_PUBLIC_API}/chats/${currentTrainig}?populate=*`);
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_API}/chats/${currentTrainig}?populate=*`
              );
              if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
              }
              let trainigDataResponse = await response.json();
              setTrainigData(
                (state: any) => [
                    ...state,
                    trainigDataResponse
                ]);
              
            } catch (err) {
             console.error(err);
            } 
        };
        currentTrainig >0 && fetchDataForTrainigs();

    } ,[currentTrainig]);

    useEffect(() => {
        console.log('called', allTrainings);
        console.log('called', allTrainings[state.appData.currentBubble]);
        setCurrentTraining(allTrainings[state.appData.currentBubble]?.id);
    } , [state.appData.currentBubble])


    if(!startTraining) {
    return <button className="my-6 text-base  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-gray-200  
                bg-gray-100 
                text-gray-700 
                border duration-200 ease-in-out 
                border-gray-600 transition" onClick={() => start()}>Start trainig</button>
    }  
    return (
    <>
        { trainigData.length > 0 && trainigData.map((item: any) => 
            <TrainigBubble  key={`listItem${item.id}`} {...item} />
        ) }
    </>
    );
}
