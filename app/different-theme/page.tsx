import Quiz from "../components/Quiz"

const data = {
    "questions": [
        {
            "question": "A question from different theme?",
            "answers": [
                "answer A",
                "asnwer 2", 
                "Answer three", 
                "4th Answer"
            ],
            "correctAnswer": "4th Answer"
        },
        {
            "question": "Last Quesion",
            "answers": [
                "5st answer A",
                "2rd asnwer 2", 
                "3nd three", 
                "8th Answer"
            ],
            "correctAnswer": "3nd three"
        }
    ]
}

export default function Home(){

    return (
        <div className="text-center">
            <Quiz questionsInput={data.questions} />
        </div>
    )
}