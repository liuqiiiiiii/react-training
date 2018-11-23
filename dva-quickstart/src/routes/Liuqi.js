import React from 'react';
import { connect } from 'dva';
import LiuqiList from '../components/LiuqiList';

const Liuqi = ({ dispatch, liuqi }) => {
  function handleDelete(id) {
    dispatch({
      type: 'liuqi/delete',
      payload: id,
    });
  }
  
  return (
    <div>
      <h2>liuqi</h2>
      <LiuqiList onDelete={handleDelete} liuqi={liuqi} />
    </div>
  );
}

export default connect(({ liuqi }) => ({
  liuqi,
}))(Liuqi);
