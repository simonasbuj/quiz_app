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
            "question": "What is the ending song in the first Shrek movie?",
            "answers": [
                "I'm a Believer",
                "On the Road Again", 
                "Livin’ La Vida Loca",
                "All Star",
            ],
            "correctAnswer": "I'm a Believer"
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
        },
        {
            "question": "Who is the main villain in Shrek 3?",
            "answers": [
                "Fairy Godmother",
                "Prince Charming", 
                "Lord Farquaad",
                "Rapunzel",
            ],
            "correctAnswer": "Prince Charming"
        },        
        {
            "question": "What was the color of Pinochio's thong?",
            "answers": [
                "White",
                "Light Blue",
                "Red",
                "Black",
                "Yellow",
                "Pink",
                "Green",
            ],
            "correctAnswer": "Pink"
        },
        {
            "question": "What is the name of the potion that causes people to fall in love in Shrek 2?",
            "answers": [
                "Love Potion No. 9",
                "Love at First Sight Potion",
                "Love Me Now Potion",
                "Potion of Forever Love",
                "Happily Ever After Potion",
            ],
            "correctAnswer": "Happily Ever After Potion"
        },
        {
            "question": "When Prince Charming reaches Princess Fiona's chambers, who does he find in her bed?",
            "answers": [
                "Pinocchio",
                "Three Little Pigs",
                "The Big Bad Wolf",
                "The Gingerbread Man",
            ],
            "correctAnswer": "The Big Bad Wolf"
        },
        {
            "question": "What is the color of Puss in Boots' eyes?",
            "answers": [
                "Brown",
                "Green", 
                "Blue",
                "Yellow",
            ],
            "correctAnswer": "Green"
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