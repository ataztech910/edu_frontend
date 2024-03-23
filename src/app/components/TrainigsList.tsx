
'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Answer from "./Answer";

export default function TrainigsList(props: any) {
    const [currentTrainig, setCurrentTraining] = useState(0);
    const [startTraining, setStartTraining] = useState(false);
    const [trainigData, setTrainigData] = useState({} as any);

    const start = () => {
        setCurrentTraining(props[0].id);
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
              setTrainigData(trainigDataResponse);
              setStartTraining(true);
              console.log(trainigDataResponse);
            } catch (err) {
             console.error(err);
            } 
        };
        currentTrainig >0 && fetchDataForTrainigs();

    } ,[currentTrainig]);

    if(!startTraining) {
    return <button className="my-6 text-base  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-gray-200  
                bg-gray-100 
                text-gray-700 
                border duration-200 ease-in-out 
                border-gray-600 transition" onClick={() => start()}>Start trainig</button>
    }  
    return (
    <div className="rounded overflow-hidden shadow-lg p-8">
        <div className="chat-message">
         <div className="flex items-end">
            <div className="flex flex-col space-y-2  mx-2 order-2 items-start">
                <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                        <TypeAnimation
                            splitter={(str) => str.split(/(?= )/)} 
                            sequence={[trainigData.data.attributes.Question]}
                            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                            repeat={0}
                         />
                    </span>
                </div>
            </div>
            <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_API}${trainigData.data.attributes.Avatar.data.attributes.url}`} 
                alt={trainigData.data.attributes.Title}
                width={200}
                height={200}
                className="w-10 h-10 rounded-full order-1" />
         </div>
         <div className="mt-6">
            <Answer answers={trainigData.data.attributes.Answer} />
         </div>
      </div>
    </div>
    );
}
