import React from "react"
import Question from "../components/Question"
import quests from "../components/aboutQuestions"
import SignUptext from "../components/SignUpText"

export default function About() {

    const [questions, setQuestions] = React.useState(quests)
    
    

    const questionElements = questions.map(question => (
        <Question 
          key={question.id}
          id={question.id}
          quest={question.quest}
          answer={question.answer}
        />
    ))

    return (
        <div className="about">
            <h3>
                I see that you have questions! 
                Check our frequently asked questions {";)"}
            </h3>
            {questionElements}

            <SignUptext />
        </div>
    )
}
 
