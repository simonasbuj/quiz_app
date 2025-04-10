import Quiz from "../components/Quiz"

const data = {
    "questions": [
        {
            "question": "What is Shrek’s name in the Lithuanian version of the movie?",
            "answers": [
                "Shrekas",
                "Emanuelis", 
                "Šrekas",
                "Šrekis",
                "Šrekas Orkaitis",
                "Šrokas",
                "Šrevaldas",
                "Didysis Šreklys",
                "Žaliasis Šaras",
                "Šrekoldas",
                "Ogrys Šrekūnas",
                "Šregimantas Orkaitis",
            ],
            "correctAnswer": "Šrekas"
        },
        {
            "question": "In which movie did Puss in Boots make his first appearance?",
            "answers": [
                "Shrek",
                "Shrek 2", 
                "Shrek the Third",
                "Shrek Forever After",
            ],
            "correctAnswer": "Shrek 2"
        },
        {
            "question": "How many Puss in Boots movies are there?",
            "answers": [
                "One (1 (I))",
                "Two (2 (II))", 
                "Three (3 (III))",
                "Four (4 (IV))",
            ],
            "correctAnswer": "Three (3 (III))"
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