import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';


const middlewares: any = []
const mockStore = configureStore(middlewares)

const store = mockStore(
  {
    activitiesReducer: {
      activities: [],
      listLoaded: false
    }
  }
)

test('renders App Correctly', () => {
  const wrapper = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
