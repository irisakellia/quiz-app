import React ,{useState}from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard'
import { useTheme } from 'styled-components';

const TOTAL_QUESTIONS = 10 ;

const App=()=> {
  const[loading, setLoading] = useState(false);
  const[questions, setQuestions] = useState([]);
  const[number,setNumber] = useState(0);
  const[userAnswers,setUserAnswers] = useState([]);
  const[Score, setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);


const startTrivia = async ()=>{

}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{

}

const nextQuestion = ()=>{

}

  return (
 <div className='App'>
  <h1>REACT QUIZ</h1>
  <button className='start' onClick={startTrivia}> Start</button>
  <p className='score'>Score:</p>
  <p>Loading Questions ...</p>
<QuestionCard 
questionNr={number + 1 }
totalQuestions={TOTAL_QUESTIONS}

/>
<button className='next' onClick={nextQuestion}>Next </button>
 </div>
  );
}

export default App;
