import React from "react"

export default function Question(props) {

    const [clicked, setClicked] = React.useState(false)

    function toggle() {
        setClicked(prevclicked => !prevclicked)
        console.log(`${props.quest} clicked`)
    }


    const answerOverflow = clicked ? "visible" : "hidden"
    const answerHeight = clicked ? "100px" : "0"    

    return (
        <div className="content-container">
            <div className="question" onClick={toggle}
            >{props.quest}</div>
            <div style={{overflow: answerOverflow, height: answerHeight}} className="answer">{props.answer}</div>
        </div>
    )
}
 
