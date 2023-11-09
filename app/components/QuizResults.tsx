import { useEffect, useState } from "react"
import clsx from "clsx"

interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
    selectedAnswer?: string; // Make selectedAnswer optional
}


export default function QuizResults({ questions } : { questions: Question[] }){

    const [score, setScore] = useState(0)
    const [conclusion, setConclusion] = useState("CUTE")

    useEffect(() => {
        let scoreCount = 0

        questions.map((q) => {
            if (q.selectedAnswer === q.correctAnswer) {
                scoreCount += 1
            }
        })

        setScore(scoreCount)
        let scorePercentage = Math.floor(scoreCount/questions.length * 100)

        // set cocnlusion title based on percentage of answered questions
        if (scorePercentage < 65 ){
            setConclusion("... ain't no way you're this bad")
        } else if (scorePercentage < 100 ){
            setConclusion("CUTE")
        } else {
            setConclusion("PERFECT")
        }
        
        console.log("RESULTS CALCULATED")// this needs to be here for some reason. anything other than '}'
    , []})
        
    return (
        <div className="py-4 bg-gray-200 rounded-md my-12">
            <h1 className="text-2xl font-bold">QUIZ RESULTS</h1>
            <h1>Correct Answers: <span className="font-bold text-lg">{score}</span></h1>
            <h1>Percentage: <span className="font-bold text-lg">{Math.floor(score/questions.length * 100)}%</span></h1>
            <h1>Conclusion: You're <span className="font-bold text-lg">{conclusion}</span></h1>
            <p>--------------------------------------------</p>
            {questions.map((q) =>(
                <div key={q.question} className="grid w-[40rem] gap-2 rounded-xl p-2  border-black mb-2">
                    <h1 className="text-center my-4 text-xl font-bold">{q.question}</h1>
                    {q.answers.map((answer: string, index: number) => (
                            <div key={`${q.question}_${index}`}>
                                <label 
                                    htmlFor={answer} 
                                    className={clsx(`
                                        answer`,
                                        answer === q.selectedAnswer && answer === q.correctAnswer && '!bg-emerald-400',
                                        answer === q.selectedAnswer && answer !== q.correctAnswer && '!bg-red-200',
                                        answer !== q.selectedAnswer && answer === q.correctAnswer && '!bg-emerald-200',
                                    )}
                                >
                                        {answer}
                                </label>
                            </div>
                    ))}
                </div>
            ))}
        </div>
    )
}