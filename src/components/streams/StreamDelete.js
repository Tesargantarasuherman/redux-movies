import React from 'react';
import history from '../../history';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions =(
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  )

  return (
  <div>
    <Modal 
      title="Delete Stream"
      content="Are You Sure Want To Delete?"
      actions={actions}
      onDismiss={()=>history.goBack()}
    />
  </div>
  );
};

export default StreamDelete;
