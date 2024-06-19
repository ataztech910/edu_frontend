'use client';
import { useContext, useState } from "react";
import { AppDataContext } from "../lesson/[slug]/data-provider";

export default function Answer(props: any) {
  const [answer, setAnswer] = useState({} as any);
  const { state, actions } = useContext(AppDataContext);

  const showResult = (isCorrect: boolean, answer: string) => {
    setAnswer({
        isCorrect,
        answered: answer
    });
    if(isCorrect) {
        if (state.appData.currentBubble < state.appData.limit) {
            const newState = state.appData.currentBubble + 1;
            actions.setAppData({...state.appData, ...{currentBubble: newState}});
            console.log('state.appData.currentBubble in Answer', {...state.appData, ...{currentBubble: newState}});
            setTimeout(() => {
                console.log('state.appData.currentBubble in Answer', state.appData.currentBubble);
            }, 500);
        }
    }
  }  

  return (
    <div>
        { !answer.isCorrect && props.answers && props.answers.map((item: any) => (
            <div key={`answer${item.id}`} className="mb-8">
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