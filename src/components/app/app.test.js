import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";
import mockData from "../../mocks/questions";

it(`renders correctly`, () => {
  const genreQuestions = mockData.questionsData.filter((item) => item.type === `genre`);
  const AppComponent = renderer
    .create(<App errors={mockData.gameSettings.errors} time={mockData.gameSettings.time} questions={genreQuestions}/>);
  expect(AppComponent).toMatchSnapshot();
});
