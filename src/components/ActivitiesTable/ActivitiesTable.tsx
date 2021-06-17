
import { Table } from 'antd';
import React from 'react';
import { Activity } from '../../utils/typings';
import activitiesColumns from '../../utils/tablesConfig/activitiesTableConfig'

interface IActivitiesTableProps {
    updateSelectedActivities: (value: any) => void;
    activities: Array<Activity>;
    isLoading: boolean
}

export const ActivitiesTable = (props: IActivitiesTableProps) => {

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
            props.updateSelectedActivities(selectedRows)
        },
    };

    return (
        <div>

            <Table
                rowSelection={{
                    ...rowSelection,
                    columnWidth: '60px',
                }}
                columns={activitiesColumns}
                dataSource={props.activities}
                loading={props.isLoading}
                rowKey={"id"}
            />
        </div>
    );
}



