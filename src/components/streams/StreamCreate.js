import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
   onSubmit = (formValues) => {
      this.props.createStream(formValues);
   };
   render() {
      return (
         <div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={this.onSubmit} />
         </div>
      );
   }
}

export default connect(null, { createStream })(StreamCreate);

//
//
//
//
// ====>>>> when we were defining our form inside StreamCreate component only

// class StreamCreate extends React.Component {
//    renderError({ error, touched }) {
//       if (touched && error) {
//          return (
//             <div className="ui error message">
//                <div className="header">{error}</div>
//             </div>
//          );
//       }
//    }
//    //    renderInput(formProps) {
//    renderInput = ({ input, label, meta }) => {
//       const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
//       return (
//          <div className={className}>
//             <label>{label}</label>
//             <input
//                // onChange={formProps.input.onChange}  // these are action maker
//                // value={formProps.input.value}
//                // alternate way
//                // {...formProps.input}
//                {...input}
//                autoComplete="off"
//             />
//             <div>{this.renderError(meta)}</div>
//          </div>
//       );
//    };
//    onSubmit = (formValues) => {
//       this.props.createStream(formValues);
//    };
//    render() {
//       return (
//          <form
//             onSubmit={this.props.handleSubmit(this.onSubmit)}
//             className="ui form error"
//          >
//             <Field
//                name="title"
//                component={this.renderInput}
//                label="Enter TItle"
//             />
//             <Field
//                name="description"
//                component={this.renderInput}
//                label="Enter Description"
//             />
//             <button className="ui button primary">Submit</button>
//          </form>
//       );
//    }
// }

// const validate = (formValues) => {
//    const errors = {};

//    if (!formValues.title) {
//       errors.title = 'you must enter a titile';
//    }
//    if (!formValues.description) {
//       errors.description = 'you must enter a descripiton';
//    }
//    return errors;
// };
// const formWrapped = reduxForm({
//    form: 'streamCreate',
//    validate,
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);
