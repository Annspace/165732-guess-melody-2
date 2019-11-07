import React from "react";
import {shallow} from 'enzyme';
import GuessArtist from "./guess-artist.jsx";
import mockData from "../../mocks/questions";

it(`Guess Artist form onchange returns correct data`, () => {
  const clickAnswer = jest.fn((e) => e.target.value);
  const endTimer = jest.fn();
  const GuessArtistComponent = shallow(<GuessArtist
    screenIndex={0}
    questionText={mockData.questionsData[0].questionText}
    onClickAnswer={clickAnswer}
    answers={mockData.questionsData[0].answers}
    song={mockData.questionsData[0].song} mistakes={2} onEndTimer={endTimer}/>);
  const formArtist = GuessArtistComponent.find(`form.game__artist`);
  const mockedEvent = {target: {value: `answer-1`}};
  formArtist.simulate(`change`, mockedEvent);
  expect(clickAnswer).toHaveReturnedWith(`answer-1`);
});
