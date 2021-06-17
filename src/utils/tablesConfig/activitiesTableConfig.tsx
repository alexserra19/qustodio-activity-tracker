import React from 'react';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import AppConstants from '../AppConstants';


const columns = [
    {
        title: 'Activity Name',
        dataIndex: 'title',
    },
    {
        title: 'COVID friendly',
        dataIndex: 'covidFriendly',
        render: (covidFriendly: boolean) => {
            return (
                covidFriendly
                    ? <CheckOutlined
                        style={{ color: AppConstants.colors.green }}
                    />
                    : <CloseOutlined style={{ color: AppConstants.colors.red }} />
            )
        }

    },
    {
        title: 'Times performed',
        dataIndex: 'timesPerformed',
    },
]

export default columns