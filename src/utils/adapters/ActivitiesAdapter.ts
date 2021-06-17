import { Activity } from "../typings";

class ActivitiesAdapter {

    JSONToActivitiesList(activitiesList: Array<any>): Array<Activity> {
        let activitiesListAdapted = activitiesList.map((item) => {
            return (
                {
                    id: item.activity_id,
                    title: item.activity_name,
                    covidFriendly: item.covid_friendly,
                    timesPerformed: item.times_performed,
                }
            )
        })
        return activitiesListAdapted
    }
}

export default new ActivitiesAdapter();
