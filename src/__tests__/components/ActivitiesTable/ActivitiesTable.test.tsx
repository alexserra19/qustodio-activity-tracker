import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { ActivitiesTable } from '../../../components/ActivitiesTable/ActivitiesTable'

jest.useFakeTimers()

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

const mockProps = {
    updateSelectedActivities: jest.fn(),
    activities: [],
    isLoading: false
}


describe('ActivitiesTable', () => {
    it('it renders correctly', () => {
        const wrapper = render(
            <Provider store={store}>
                <ActivitiesTable {...mockProps} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })
})

