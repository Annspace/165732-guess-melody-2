import React from "react";
import {shallow} from 'enzyme';
import GuessGenre from "./guess-genre.jsx";
import mockData from "../../mocks/questions";

it(`Guess Genre form submit returns correct data`, () => {
  const clickAnswer = jest.fn((e) => {
    return {
      [e.target[0].name]: e.target[0].value,
      [e.target[1].name]: e.target[1].value,
      [e.target[2].name]: e.target[2].value,
    };
  });
  const GuessGenreComponent = shallow(<GuessGenre
    screenIndex={0}
    questionText={mockData.questionsData[3].questionText}
    onClickAnswer={clickAnswer}
    answers={mockData.questionsData[3].answers}/>);
  const formGenre = GuessGenreComponent.find(`form.game__tracks`);
  // выбор трёх ответов
  const mockedEvent = {
    target: [{name: `answer-1`, value: `answer-1`}, {name: `answer-2`, value: `answer-2`}, {name: `answer-3`, value: `answer-3`}],
    preventDefault: () => {},
  };
  formGenre.simulate(`submit`, mockedEvent);
  expect(clickAnswer).toHaveReturnedWith({'answer-1': `answer-1`, 'answer-2': `answer-2`, 'answer-3': `answer-3`});
});
