import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const LiuqiList = ({ onDelete, liuqi }) => {
  const columns = [{
    title: 'name',
    dataIndex: 'name',
  }, {
    title: 'actions',
    render: (text, record) => {
      return (
        <Popconfirm title="delete" onConfirm={() => onDelete(record.id)}>
          <Button>delete</Button>
        </Popconfirm>
      );
    },
  }];

  return (
    <Table
      dataSource={liuqi}
      columns={columns}
    />
  );
};

LiuqiList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  liuqi: PropTypes.array.isRequired,
};

export default LiuqiList;
