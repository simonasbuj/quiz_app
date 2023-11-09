import Image from 'next/image'
import Quiz from './components/Quiz'

const data = {
  "questions": [
      {
          "question": "'I'll Make a Man Out of You' is a song from which Disney movie?",
          "answers": [
              "Mulan",
              "Tangled", 
              "Aladin", 
              "The Princess and the Frog"
          ],
          "correctAnswer": "Mulan",
          "selectedAnswer": ""
      },
      {
          "question": "What is the name of Andy’s neighbor in Toy Story?",
          "answers": [
              "Kid",
              "Finn", 
              "Jack",
              "Sid"
          ],
          "correctAnswer": "Sid"
      },
      {
          "question": "What does 'Hakuna Matata' mean?",
          "answers": [
              "Power of friendship",
              "Beautiful day", 
              "My father is dead",
              "No worries"
          ],
          "correctAnswer": "No worries"
      },
      {
          "question": "What kind of animal killed Tarzan's real parents?",
          "answers": [
              "Cheetah",
              "Leopard", 
              "Panther",
              "Lion"
          ],
          "correctAnswer": "Leopard"
      },
      {
          "question": "How did Jasmine and Aladdin first meet?",
          "answers": [
              "Aladdin saved Jasmine from being injured",
              "Jasmine saw Aladdin disguised at a party", 
              "Genie introduced them as a mutual friend",
              "Jasmine saved Aladdin from being sent to jail"
          ],
          "correctAnswer": "Aladdin saved Jasmine from being injured"
      },
      {
          "question": "What kind of pet did Pocahontas have?",
          "answers": [
              "Fox",
              "Racoon",
              "Squirrel",
              "Wolf"
          ],
          "correctAnswer": "Racoon"
      },
      {
          "question": "What is the alias of the superhero from The Incredibles who can create ice and freeze surfaces by manipulating moisture?",
          "answers": [
              "Ice-Man",
              "Mr. Freeze", 
              "Frozone",
              "Icefrost"
          ],
          "correctAnswer": "Frozone"
      },
      {
          "question": "How many times is the phrase 'Let it go' repeated in a single chorus of 'Let It Go' from Frozen?",
          "answers": [
              "Two",
              "Three", 
              "Four",
              "Five",
              "Six"
          ],
          "correctAnswer": "Four"
      },
      {
          "question": "Where does Moana live?",
          "answers": [
              "Papue New Guinea",
              "Bahamas",
              "Malaysia", 
              "Polinesia"
          ],
          "correctAnswer": "Polinesia"
      }
  ]
}

export default function Home() {

  return (
    <main className="text-center">
      <Quiz questionsInput={ data.questions }/>
    </main>
  )
}
