import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from "./audioplayer.jsx";
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
  const onClickTrackButtonHandler = jest.fn();
  const AudioPlayerComponent = renderer
    .create(<AudioPlayer
      onClickTrackButton={onClickTrackButtonHandler}
      playing={true}
      src={mockData.questionsData[0].song.src}/>, options).toJSON();
  expect(AudioPlayerComponent).toMatchSnapshot();
});
