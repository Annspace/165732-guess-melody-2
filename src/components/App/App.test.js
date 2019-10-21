import React from 'react';
import renderer from 'react-test-renderer';
import App from "./App";

it(`renders correctly`, () => {
  const AppComponent = renderer
    .create(<App/>);
  expect(AppComponent).toMatchSnapshot();
});
