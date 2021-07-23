import React, {useEffect} from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ questions, setQuestions, onDeleteQuestion, onUpdateQuestion }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => setQuestions(data))
    console.log(questions)
  },[])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => (
        <QuestionItem onDeleteQuestion={onDeleteQuestion} onUpdateQuestion={onUpdateQuestion} key={question.id} question={question}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
