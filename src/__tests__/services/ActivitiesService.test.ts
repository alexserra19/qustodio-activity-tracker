import ActivitiesService from '../../services/ActivitiesService';
import ActivitiesAdapter from '../../utils/adapters/ActivitiesAdapter';
import activitiesMock from "../../mocks/activitiesMock.json"

afterEach(() => {
    jest.clearAllMocks();
});

describe('ActivitiesService', () => {

    const mockResponseAdapter = [
        {
            id: 1,
            title: 'title',
            covidFriendly: false,
            timesPerformed: 1,
        }
    ]

    it('getActivities', async () => {
        const adapterSpy = jest.spyOn(ActivitiesAdapter, 'JSONToActivitiesList').mockImplementation(() => mockResponseAdapter);

        const data = await ActivitiesService.getActivities()

        expect(adapterSpy).toBeCalledWith(activitiesMock.entries)
        expect(data).toBe(mockResponseAdapter)
    });
});
