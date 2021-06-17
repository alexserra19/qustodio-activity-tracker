import activitiesTypes from '../../../store/types/activitiesTypes';
import activitiesActions from '../../../store/actions/activitiesActions';


describe('Activities Actions', () => {
    it('initializeStart', () => {
        const expectedAction = {
            type: activitiesTypes.INITIALIZE_START,
        }

        expect(activitiesActions.initializeStart()).toEqual(expectedAction)
    });

    it('initializeFinish', () => {
        const mockActivities = [
            {
                id: 1,
                title: 'title',
                covidFriendly: false,
                timesPerformed: 1,
            }
        ]

        const expectedAction = {
            type: activitiesTypes.INITIALIZE_FINISH,
            data: {
                activities: mockActivities,
            }
        }

        expect(activitiesActions.initializeFinish(mockActivities)).toEqual(expectedAction)
    });

    it('performActivities', () => {
        const mockActivities = [1, 2, 3]

        const expectedAction = {
            type: activitiesTypes.PERFORM_ACTIVITIES,
            data: {
                activitiesIds: mockActivities,
            }
        }

        expect(activitiesActions.performActivities(mockActivities)).toEqual(expectedAction)
    });

});