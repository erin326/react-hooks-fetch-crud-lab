import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");


 

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;


 // function updateQuestions(id, correctIndex) {
  //   const updatedQuestions = questions.map(question => {
  //     if(question.id === id) {
  //       return [...question, correctIndex]
  //     }else {
  //       return question;
  //     }
  //   })
  //   setQuestions(updatedQuestions);
  // }


  // questions={questions} setQuestions={setQuestions}  onUpdateQuestion={updateQuestions} 