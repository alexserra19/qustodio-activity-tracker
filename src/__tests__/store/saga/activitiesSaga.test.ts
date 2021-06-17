import ActivitiesService from '../../../services/ActivitiesService';
import { initialize } from '../../../store/saga/activitiesSaga';
import { call, put } from 'redux-saga/effects';
import activitiesActions from '../../../store/actions/activitiesActions';
import helpers from '../../../utils/helpers';

describe('Activity Saga', () => {

    it('initialize with no error', async () => {

        const gen = initialize();

        const mockActivities = [
            {
                id: 1,
                title: 'title',
                covidFriendly: false,
                timesPerformed: 1,
            }
        ]

        expect(gen.next().value).toEqual(call(ActivitiesService.getActivities))
        expect(gen.next(mockActivities).value).toEqual(put(activitiesActions.initializeFinish(mockActivities)))

    });


    it('initialize with error', async () => {

        const gen = initialize();

        const activities: any = []

        expect(gen.next().value).toEqual(call(ActivitiesService.getActivities))
        expect(gen.next(activities).value).toEqual(call(helpers.handleNetworkError));

    });
});