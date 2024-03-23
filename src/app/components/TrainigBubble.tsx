import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Answer from "./Answer";

export default function TrainigBubble(props: any) {
    return <div className="rounded overflow-hidden shadow-lg p-8" key={`bubble${props.id}`}>
                <div className="chat-message">
                    <div className="flex items-end">
                        <div className="flex flex-col space-y-2  mx-2 order-2 items-start">
                            <div>
                                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                    <TypeAnimation
                                        splitter={(str) => str.split(/(?= )/)} 
                                        sequence={[props.data.attributes.Question]}
                                        speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                                        repeat={0}
                                    />
                                </span>
                            </div>
                        </div>
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_IMAGE_API}${props.data.attributes.Avatar.data.attributes.url}`} 
                            alt={props.data.attributes.Title}
                            width={200}
                            height={200}
                            className="w-10 h-10 rounded-full order-1" />
                    </div>
                    <div className="mt-6">
                        <Answer answers={props.data.attributes.Answer} />
                    </div>
                </div>
        </div>
}