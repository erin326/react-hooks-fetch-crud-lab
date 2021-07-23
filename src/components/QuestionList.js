import React, {useEffect, useState} from "react";
import QuestionItem from './QuestionItem';

function QuestionList() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => setQuestions(data))
   
  },[])

  
  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(()=>  {
      const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions)

    })
  
  }

  
  


  function handleQuestionUpdate(id, correctIndex) {
    const updatedQuestions = questions.map(question => {
      if(question.id === id) {
        return [...question, correctIndex]
      }else {
        return question;
      }
    })
    setQuestions(updatedQuestions);
  
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'correctIndex': correctIndex })
    })
  }
 



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => (
        <QuestionItem 
          onDeleteQuestion={handleDelete}
         onUpdateQuestion={handleQuestionUpdate} key={question.id} question={question}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
