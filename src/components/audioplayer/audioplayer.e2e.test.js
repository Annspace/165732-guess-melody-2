import React from "react";
import {mount} from 'enzyme';
import AudioPlayer from "./audioplayer";
import mockData from "../../mocks/questions";

it(`Audioplayer on click play/pause button`, () => {
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => {});
  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  const onClickTrackButtonHandler = jest.fn(() => {
    AudioPlayerComponent.setState({playing: !AudioPlayerComponent.state().playing});
  });

  const AudioPlayerComponent = mount(<AudioPlayer
    onClickTrackButton={onClickTrackButtonHandler}
    playing={false}
    src={mockData.questionsData[0].song.src}/>);

  const button = AudioPlayerComponent.find(`button`);

  button.simulate(`click`);
  playStub.mockRestore();
  expect(AudioPlayerComponent.state().playing).toBe(true);

  button.simulate(`click`);
  pauseStub.mockRestore();
  expect(AudioPlayerComponent.state().playing).toBe(false);
});
