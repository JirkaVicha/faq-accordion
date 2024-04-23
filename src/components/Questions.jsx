import Question from "./Question"
import questions from "../questions"

const Questions = () => {
  
  return (
    <div className="all-questions">
      <h2 className="title">Frequently Asked Questions</h2>
      {questions.map((question) => (
        <Question
          key={question.id}
          {...question}
        />
      ))}
      
    </div>
  )
}

export default Questions