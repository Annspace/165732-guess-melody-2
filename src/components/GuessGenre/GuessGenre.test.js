import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenre from "./GuessGenre";
import mockData from "../../mocks/questions";

it(`renders correctly`, () => {
  const clickAnswer = jest.fn();
  const GuessGenreComponent = renderer
    .create(<GuessGenre
      screenIndex={0}
      questionText={mockData.questionsData[0].questionText}
      onClickAnswer={clickAnswer}
      answers={mockData.questionsData[0].answers}/>);
  expect(GuessGenreComponent).toMatchSnapshot();
});
