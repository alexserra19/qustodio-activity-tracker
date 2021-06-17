import { Activity } from "../typings";

class ActivitiesAdapter {

    JSONToActivitiesList(activitiesList: Array<any>): Array<Activity> {
        let activitiesListAdapted = activitiesList.map((item, index) => {
            return (
                {
                    id: index,
                    type: item.programType,
                    title: item.title,
                    description: item.description,
                    date: item.releaseYear,
                    image: item.images['Poster Art'].url,
                }
            )
        })
        return activitiesListAdapted
    }
}

export default new ActivitiesAdapter();
