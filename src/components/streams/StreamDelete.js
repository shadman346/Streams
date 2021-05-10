import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
   }

   renderAction() {
      //either start with <div> tag or <React.Fragment> tag to let know React ,that inside is JSX code
      // but we dont want <div> tag here thats why we use others tag instead that doesn't load in DOM.
      //React.Fragment only work as proxy inside React environment but doesnt load in actual DOM.
      //  <React.Fragment></React.Fragment>  can be replaced by   <></>    this
      const { id } = this.props.match.params;
      return (
         <>
            <button
               onClick={() => this.props.deleteStream(id)}
               className="ui negative button"
            >
               Delete
            </button>
            <Link to="/" className="ui button">
               Cancel
            </Link>
         </>
      );
   }

   renderContent() {
      if (!this.props.stream) {
         return 'Are you sure want to delete this stream?';
      }

      return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
   }

   render() {
      return (
         <Modal
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.renderAction()}
            onDismiss={() => history.push('/')}
         />
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
   StreamDelete
);
