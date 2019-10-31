import React from "react";
import {mount} from 'enzyme';
import AudioPlayer from "./audioplayer";
import mockData from "../../mocks/questions";

it(`Audioplayer on click play/pause button`, () => {
  const onClickTrackButtonHandler = jest.fn(() => {
    AudioPlayerComponent.setState({playing: !AudioPlayerComponent.state().playing});
  });
  const AudioPlayerComponent = mount(<AudioPlayer
    onClickTrackButton={onClickTrackButtonHandler}
    playing={false}
    src={mockData.questionsData[0].song.src}/>);
  const button = AudioPlayerComponent.find(`button`);
  button.simulate(`click`);
  expect(AudioPlayerComponent.state().playing).toBe(true);
  button.simulate(`click`);
  expect(AudioPlayerComponent.state().playing).toBe(false);
});
