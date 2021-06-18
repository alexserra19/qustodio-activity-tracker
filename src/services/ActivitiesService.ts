import { Activity } from "../utils/typings";
import ActivitiesAdapter from "../utils/adapters/ActivitiesAdapter";
import activitiesMock from "../mocks/activitiesMock.json"

class ActivitiesService {

    async getActivities(): Promise<Array<Activity>> {
        // let response = await RequestInterceptorService.doRequest(url);
        let response = activitiesMock
        let data: Array<Activity> = []
        if (response?.isSuccess) {
            data = ActivitiesAdapter.JSONToActivitiesList(response.entries)
        }
        return data
    }
}

export default new ActivitiesService();
