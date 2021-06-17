import React, { useEffect, useState } from 'react';
import './Home.scss'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import activitiesActions from '../../store/actions/activitiesActions';
import _ from 'lodash';
import helpers from '../../utils/helpers';
import { Activity } from '../../utils/typings';
import { Spin, Row, Col, Table } from 'antd';
import activitiesColumns from '../../utils/tablesConfig/activitiesTableConfig'

const Home = () => {
    const history = useHistory();
    const activities = useSelector((store: any) => store.activitiesReducer.activities);
    const listLoaded = useSelector((store: any) => store.activitiesReducer.listLoaded);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch()
    const [selectedActivities, setSelectedActivities] = useState([]);



    useEffect(() => {
        if (_.isEmpty(activities)) {
            setIsLoading(true)
            dispatch(activitiesActions.initializeStart())
        }
    }, []);


    useEffect(() => {
        console.log('----------', activities)
    }, [activities]);


    useEffect(() => {
        if (listLoaded) {
            setIsLoading(false)
        }

    }, [listLoaded])


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
            setSelectedActivities(selectedRows)
        },
    };


    console.log('selectedRows', selectedActivities)

    return (
        <div>
            <div className="layoutContainer homeContainer">
                <Row>
                    <Col span={24}>
                        <h1>My 2021 Activities</h1>
                    </Col>
                    <Col span={24}>
                        <Table
                            rowSelection={rowSelection}
                            columns={activitiesColumns}
                            dataSource={activities}
                            loading={isLoading}
                            rowKey={"id"}
                        />
                    </Col>
                </Row>

                {isLoading &&
                    <Spin
                        size="large"
                    />
                }
            </div>
        </div>
    )
}


export default Home;