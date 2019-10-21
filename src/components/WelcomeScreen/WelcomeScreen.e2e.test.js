import React from "react";
import {shallow} from 'enzyme';
import WelcomeScreen from "./WelcomeScreen";

it(`Welcome screen click start`, () => {
  const clickStart = jest.fn();
  const WelcomeScreenComponent = shallow(<WelcomeScreen time={5} errors={4} clickHandler={clickStart}/>);
  const startButton = WelcomeScreenComponent.find(`.welcome__button`);
  startButton.simulate(`click`);
  expect(clickStart).toHaveBeenCalledTimes(1);
});
