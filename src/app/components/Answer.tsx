'use client';

import { useState } from "react";

export default function Answer(props: any) {
  const [answer, setAnswer] = useState({} as any);  

  const showResult = (isCorrect: boolean, answer: string) => {
    setAnswer({
        isCorrect,
        answered: answer
    });
  }  

  return (
    <div>
        { props.answers && props.answers.map((item: any) => (
            <div key={item.id} className="mb-8">
                <div className="flex">
                    <div>
                        {item.Answer}
                    </div>
                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">
                        <button onClick={() => showResult(item.Correct, item.Explanation)}>Answer</button>
                    </div>
                </div>
            </div>
        )) }
        <div>
            {answer.answered && 
                <div className="flex">
                    <div>{typeof answer === 'object' && answer.isCorrect ? 'Correct' : 'Incorrect'}</div>
                    <div className="ml-4">{answer.answered}</div>
                </div>}
        </div>
    </div>
  )
}