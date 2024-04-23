import { useState } from "react"

const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false)

  const showAnswer = () => {
    setShow(!show)
  }

  return (
    <div className="one-question">
      <div className="question-header">
        <h3>{id}. {question}</h3>
        <button onClick={showAnswer}>
          {!show ? "+" : "-"}
        </button>
      </div>
      <div className="answer">
         {show && <p>{answer}</p>}
      </div>
    </div>
  )
}

export default Question