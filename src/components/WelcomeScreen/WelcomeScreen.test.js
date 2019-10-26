import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from "./WelcomeScreen";

it(`renders correctly`, () => {
  const clickStartHandler = jest.fn();
  const WelcomeScreenComponent = renderer
    .create(<WelcomeScreen time={5} errors={4} onClickStart={clickStartHandler}/>);
  expect(WelcomeScreenComponent).toMatchSnapshot();
});
