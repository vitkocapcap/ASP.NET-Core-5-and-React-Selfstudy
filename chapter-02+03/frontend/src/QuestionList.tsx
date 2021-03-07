import React from 'react';
import { Question } from './Question';
import { QuestionData } from './QuestionsData';

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList = ({ data }: Props) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}>
        <Question data={question} />
      </li>
    ))}
  </ul>
);
