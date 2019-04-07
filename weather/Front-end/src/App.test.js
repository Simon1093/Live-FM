import React from 'react';

import Weather from './components/weather/weather';


it('test button', () => {
  const wrapper = shallow(
    <button
      type="button"
      className="form-submit"
      onClick={jest.fn()}
    >
Logout

    </button>
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
it('test weather', () => {
  const wrapper = shallow(
    <Weather />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
