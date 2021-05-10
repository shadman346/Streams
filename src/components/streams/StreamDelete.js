import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
   //either start with <div> tag or <React.Fragment> tag to let know React ,that inside is JSX code
   // but we dont want <div> tag here thats why we use others tag instead that doesn't load in DOM.
   //React.Fragment only work as proxy inside React environment but doesnt load in actual DOM.
   //  <React.Fragment></React.Fragment>  can be replaced by   <></>    this
   const actions = (
      <>
         <button className="ui negative button">Delete</button>
         <button className="ui button">Cancel</button>
      </>
   );

   return (
      <div>
         StreamDelete
         <Modal
            title="Delete Stream"
            content="Are you sure you want to Delete this stream?"
            actions={actions}
            onDismiss={() => history.push('/')}
         />
      </div>
   );
};

export default StreamDelete;
