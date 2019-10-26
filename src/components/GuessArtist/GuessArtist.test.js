import React from 'react';
import renderer from 'react-test-renderer';
import GuessArtist from "./GuessArtist";
import mockData from "../../mocks/questions";

it(`renders correctly`, () => {
  const clickAnswer = jest.fn();
  const GuessArtistComponent = renderer
    .create(<GuessArtist
      screenIndex={0}
      questionText={mockData.questionsData[0].questionText}
      onClickAnswer={clickAnswer}
      answers={mockData.questionsData[0].answers}/>);
  expect(GuessArtistComponent).toMatchSnapshot();
});
