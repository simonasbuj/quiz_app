'use client'

// import { promises as fs } from "fs"
import { useEffect, useLayoutEffect, useState } from "react"
import Button from "./Button";
import clsx from "clsx";
import QuizResults from "./QuizResults";


interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
    selectedAnswer?: string; // Make selectedAnswer optional
}

export default function Quiz({ questionsInput } : { questionsInput: Question[] }) {
    // const file = await fs.readFile(process.cwd() + '/_data/data.json', 'utf8');
    // const data = JSON.parse(file);

    const [selectedQuestion, setSelectedQuestion] = useState(0)
    const [questions, setQuestions] = useState(questionsInput)
    const [canComplete, setCanComplete] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    //randomize questions order on load
    // hmm its almost ok. first question doesnt update on ui until you click on something...
    // useEffect(() => {
    //     console.log("RANDOMIZE")
    //     let randomizedQuestions = [...questionsInput]
    //     randomizedQuestions.sort(() => Math.random() - 0.5)

    //     randomizedQuestions.map(q => {
    //         q.answers.sort(() => Math.random() - 0.5)
    //     })
        
    //     setQuestions(randomizedQuestions)
    //     setIsLoading(false)
    // }, [])

    function onNextPrevClick(shiftBy: number) {
        const questionsNumber = questions.length - 1
        const newIndex = selectedQuestion + shiftBy

        if (newIndex >= 0 && newIndex <= questionsNumber) {
            setSelectedQuestion(newIndex)
        }
    }

    const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const selectedAnswer = e.target.value
        const updatedQuestions = [...questions]

        updatedQuestions[selectedQuestion].selectedAnswer = selectedAnswer
        setQuestions(updatedQuestions)
    }

    useEffect(() => {
        let canComplete = true
        questions.map((q) => {
            if (q.selectedAnswer === undefined || q.selectedAnswer === "") {
                canComplete = false
            }  
        })
        setCanComplete(canComplete)
    }, [questions])

    return(
        <>
            <div className="grid min-h-screen w-full place-items-center">
                { !isCompleted && !isLoading ? 
                <div className="py-4 bg-gray-200 rounded-md">
                    <form action="">
                        <h1 className="text-center my-4 text-xl font-bold w-[40rem] px-2">{questions[selectedQuestion].question}</h1>
                        <div className="grid w-[40rem] gap-2 rounded-xl p-2">
                            {questions[selectedQuestion].answers.map((answer: string, index: number) => (
                                <div key={`${selectedQuestion}_${index}`}>
                                    {<input 
                                        type="radio" 
                                        name="option" 
                                        id={answer} 
                                        value={answer} 
                                        className="peer hidden" 
                                        defaultChecked={(answer === questions[selectedQuestion].selectedAnswer) ? true : false} 
                                        onChange={handleRadioButtonChange}
                                    />}
                                    <label htmlFor={answer} className="answer">{answer}</label>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between p-2 items-center">
                            <Button text="Previous" onClick={() => onNextPrevClick(-1)} shiftDirection={-1} disabled={selectedQuestion===0}/>
                            <p className="font-black text-lg">{selectedQuestion + 1}/{questions.length}</p>
                            <Button text="Next" onClick={() => onNextPrevClick(1)} shiftDirection={1} disabled={selectedQuestion === questions.length -1}/>
                        </div>
                    </form>
                    <div 
                        className={clsx(
                            `relative duration-700`,
                            canComplete ? "opacity-100" : "opacity-0 translate-y-5" )}
                    >
                        <button
                            onClick={() => setIsCompleted(true)}
                            className={clsx(`
                                border-2 rounded-md border-blue-500 bg-blue-500 w-1/6 text-white font-black text-lg h-14
                                absolute left-1/2 -translate-x-1/2
                                hover:scale-125 transition`,
                                
                            )}
                            disabled={!canComplete}
                        >
                            Complete
                        </button>
                    </div>
                </div>
                : /* else if is completed redner quiz results*/
                isCompleted &&
                <QuizResults questions={questions}/>
                }
            </div>
        </>
    )
}