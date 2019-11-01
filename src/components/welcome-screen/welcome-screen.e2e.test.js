import React from "react";
import {shallow} from 'enzyme';
import WelcomeScreen from "./welcome-screen.jsx";

it(`Welcome screen click start`, () => {
  const clickStartHandler = jest.fn();
  const WelcomeScreenComponent = shallow(<WelcomeScreen time={5} errors={4} onClickStart={clickStartHandler}/>);
  const startButton = WelcomeScreenComponent.find(`.welcome__button`);
  startButton.simulate(`click`);
  expect(clickStartHandler).toHaveBeenCalledTimes(1);
});
