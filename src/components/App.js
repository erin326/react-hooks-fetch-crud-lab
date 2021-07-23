import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function deleteQuestion(id) {
    const updatedQuestions = questions.filter(question => question.id !== id)
    // setQuestions(updatedQuestions);
  }

  function updateQuestions(id, correctIndex) {
    const updatedQuestions = questions.map(question => {
      if(question.id === id) {
        return [...question, correctIndex]
      }else {
        return question;
      }
    })
    setQuestions(updatedQuestions);
  }

  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} setQuestions={setQuestions} onDeleteQuestion={deleteQuestion} onUpdateQuestion={updateQuestions}/>}
    </main>
  );
}

export default App;
