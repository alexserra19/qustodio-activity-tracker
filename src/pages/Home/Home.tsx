import React, { useEffect, useState } from 'react';
import './Home.scss'
import { useDispatch, useSelector } from "react-redux";
import activitiesActions from '../../store/actions/activitiesActions';
import _ from 'lodash';
import { Row, Col, Button, Modal } from 'antd';
import { ActivitiesTable } from '../../components/ActivitiesTable/ActivitiesTable';
import { Activity } from '../../utils/typings';

const Home = () => {
    const activities = useSelector((store: any) => store.activitiesReducer.activities);
    const listLoaded = useSelector((store: any) => store.activitiesReducer.listLoaded);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        if (_.isEmpty(activities)) {
            setIsLoading(true)
            dispatch(activitiesActions.initializeStart())
        }
    }, []);

    useEffect(() => {
        if (listLoaded) {
            setIsLoading(false)
        }
    }, [listLoaded])

    const performActivities = () => {
        const availableActivities = selectedActivities.filter((activity: Activity) => activity.covidFriendly);
        const performIds = availableActivities.map((activity: Activity) => activity.id)
        const unavailableActivities = selectedActivities.filter((activity: Activity) => !activity.covidFriendly);

        if (!_.isEmpty(unavailableActivities)) displayWarningModal(unavailableActivities)
        dispatch(activitiesActions.performActivities(performIds))
    }

    const displayWarningModal = (unavailableActivities: Array<Activity>) => {
        Modal.warning({
            title: 'The selected activities could not be performed:',
            content: getDescriptions(unavailableActivities),
        });
    }

    const getDescriptions = (activities: Array<Activity>) => {
        return(
            <ul>
                {activities.map((activity: Activity, index) => {
                    return <li key={index}>{activity.title}</li>
                })}
            </ul>
        )
    }

    return (
        <div>
            <div className="layoutContainer homeContainer">
                <Row>
                    <Col span={24}>
                        <h1>My 2021 Activities</h1>
                    </Col>
                    <Col span={24}>
                        <ActivitiesTable
                            updateSelectedActivities={setSelectedActivities}
                            activities={activities}
                            isLoading={isLoading}
                        />
                    </Col>
                    <Col span={24}>
                        {!_.isEmpty(selectedActivities) &&
                            <Button
                                type="primary"
                                onClick={performActivities}
                            >
                                Perform Activities
                            </Button>
                        }
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default Home;