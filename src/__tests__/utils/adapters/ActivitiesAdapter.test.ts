import ActivitiesAdapter from '../../../utils/adapters/ActivitiesAdapter';

afterEach(() => {
    jest.clearAllMocks();
});

describe('ActivitiesAdapter', () => {

    const mockResponseAdapter = [
        {
            id: 0,
            title: "Netflix & chill",
            covidFriendly: true,
            timesPerformed: 0,
        }
    ]

    const mockEntries = [
        {
            "activity_id": 0,
            "activity_name": "Netflix & chill",
            "covid_friendly": true,
            "times_performed": 0
        },
    ]

    it('JSONToActivitiesList', async () => {

        const data = ActivitiesAdapter.JSONToActivitiesList(mockEntries)
        expect(data).toStrictEqual(mockResponseAdapter)
    });
});
