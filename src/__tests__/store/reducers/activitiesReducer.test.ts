import activitiesTypes from '../../../store/types/activitiesTypes';
import activitiesReducer from '../../../store/reducers/activitiesReducer';


describe('Activities Reducer', () => {

    let initialState = {
        activities: [],
        listLoaded: false
    }

    it('should return the initial state', () => {
        expect(activitiesReducer(initialState, {})).toEqual(initialState);
    });

    it('should handle INITIALIZE_FINISH', () => {

        const mockActivities = [
            {
                id: 1,
                title: 'title',
                covidFriendly: false,
                timesPerformed: 1,
            }
        ]

        const mockInitializeFinishAction = {
            type: activitiesTypes.INITIALIZE_FINISH,
            data: {
                activities: mockActivities,
            }
        };

        const mockResultState = {
            ...initialState,
            activities: mockActivities,
            listLoaded: true
        }

        expect(activitiesReducer(initialState, mockInitializeFinishAction)).toEqual(mockResultState);
    });

    it('should handle PERFORM_ACTIVITIES', () => {

        const mockActivities = [
            {
                id: 1,
                title: 'title',
                covidFriendly: false,
                timesPerformed: 2,
            }
        ]

        const mockActivitiesIds = [1]

        const mockInitialState2 = {
            activities: [
                {
                    id: 1,
                    title: 'title',
                    covidFriendly: false,
                    timesPerformed: 1,
                }
            ],
            listLoaded: false
        }

        const mockPerformActivitiesAction = {
            type: activitiesTypes.PERFORM_ACTIVITIES,
            data: {
                activitiesIds: mockActivitiesIds,
            }
        };

        const mockResultState = {
            ...initialState,
            activities: mockActivities,
        }

        expect(activitiesReducer(mockInitialState2, mockPerformActivitiesAction)).toEqual(mockResultState);
    });
});
