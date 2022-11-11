import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QuizProvider } from './contexts/quiz';
import Quiz from './components/Quiz'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QuizProvider>
      <Quiz />
    </QuizProvider>
);