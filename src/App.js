import React, { useState } from "react";
import Data from "./quiz-data.js";
import './App.css'

const App = () => {

  const [answers,setAnswers]=useState(new Array(Data.length).fill(-1));
  const [score,setScore]=useState(null);

  const handleOptionClicked=(questionNo,selectedOption)=>{
          const newAns=[...answers];
          newAns[questionNo]=selectedOption;
          setAnswers(newAns);
  }

  const handleSubmit=()=>{
    let totalScore=0;
    for(let i=0;i<Data.length;i++)
    {
      if(answers[i]===Data[i].correctAnswerIndex)
      {
        totalScore++;
      }
    }
    setScore(totalScore);
  }

  return (
    <div className="App">
      {Data.map((item, questionNo) => {
        return (
          <div key={item.id} className="question">
            {item.question}
            <ul className="option-wrapper">
              {item.options.map((option, optionNo) => {
                return (<li className="options"
                key={optionNo}
                onClick={()=>handleOptionClicked(questionNo,optionNo)}>
                  {option}
                </li>);
              })}
            </ul>
          </div>
        );
      })}

      <button className="check-ans" onClick={handleSubmit}>Check Answers</button>
      {
        score!==null && 
        ( 
          <div className="result">
            <h3 className="your-score">your Score : {score}/{Data.length}</h3>
            <div >
            {
              Data.map((item,index)=>{
                return(
                  <div key={item.id}>
                    <p className="result-ques">{item.question}</p>
                    <p className="correct-ans">Correct Answer:   {item.options[item.correctAnswerIndex]}</p>
                    <p className="your-ans">Your Answer:      {item.options[answers[index]]}</p>
                  </div>
                  
                )
              })
            }
            </div>
          </div>
        )}
    </div>
  );
};

export default App;

// import React from "react"
// import './App.css';
// import Data from "./quiz-data"
// import Main from "./main";
// import {nanoid} from "nanoid"

// export default function App() {

//   function options(index)
//   {
//    const item=Data.results[index];
//    const ans={
//      opt:[...item.incorrect_answers,item.correct_answer],
//      isSelected:false,
//      id:nanoid()
//    }
//      const size=ans.opt.length;
//      let randomIndex=Math.floor(Math.random()*size)
//      if(randomIndex!==size-1)
//      {
//          [ans.opt[3],ans.opt[randomIndex]]=[ans.opt[randomIndex],ans.opt[3]]
//      }
//    return(
//              <div className="answers">
//               {ans}
//                { ans.opt.map(options=>{
//                  return (<div className="options">{options}</div>)
//              })}
//              </div>
//        )
//   }

//    function quesAns()
//      {
//         return( Data.results.map((item,index)=>{
//              return (
//              <div>
//                  <div className="questions">{item.question}</div>
//                 {options(index)}

//              </div>)
//            }))
//      }
//   return (
//     <main>
//       <Main
//       quesAns={quesAns()}
//       />
//       <button className="check-answer"> Check Answers</button>
//     </main>
//   );
// }



