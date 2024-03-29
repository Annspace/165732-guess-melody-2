import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenre from "./guess-genre.jsx";
import mockData from "../../mocks/questions";

function createNodeMock(element) {
  if (element.type === `audio`) {
    // This is your fake DOM node for <p>.
    // Feel free to add any stub methods, e.g. focus() or any
    // other methods necessary to prevent crashes in your components.
    return {
      createRef() {}
    };
  }
  // You can return any object from this method for any type of DOM component.
  // React will use it as a ref instead of a DOM node when snapshot testing.
  return null;
}

it(`renders correctly`, () => {
  const options = {createNodeMock};
  const clickAnswer = jest.fn();
  const GuessGenreComponent = renderer
    .create(<GuessGenre
      screenIndex={0}
      questionText={mockData.questionsData[4].questionText}
      onClickAnswer={clickAnswer}
      answers={mockData.questionsData[4].answers}/>, options).toJSON();
  expect(GuessGenreComponent).toMatchSnapshot();
});
