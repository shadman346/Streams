import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
   componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client
            .init({
               clientId:
                  '974491994532-o7omfm75phtfqrp4sjb2fqqnt8roupn7.apps.googleusercontent.com',
               scope: 'email',
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance();
               //    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
               this.onAuthChange(this.auth.isSignedIn.get());
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
      });
   }

   //    onAuthChange = () => {
   //       this.setState({ isSignedIn: this.auth.isSignedIn.get() });
   //    };

   onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
         this.props.signIn();
      } else {
         this.props.signOut();
      }
   };

   onSignInClick = () => {
      this.auth.signIn();
   };

   onSignOutClick = () => {
      this.auth.signOut();
   };
   renderAuthButton() {
      if (this.props.isSignedIn === null) {
         return <div>i dont know if we are signed in</div>;
      } else if (this.props.isSignedIn) {
         return (
            <button
               onClick={this.onSignOutClick}
               className="ui red google button"
            >
               <i className="google icon" />
               Sign Out
            </button>
         );
      } else
         return (
            <button
               onClick={this.onSignInClick}
               className="ui red google button"
            >
               <i className="google icon" />
               Sign In with Google
            </button>
         );
   }
   render() {
      return <div>{this.renderAuthButton()}</div>;
   }
}

const mapStateProps = (state) => {
   return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateProps, { signIn, signOut })(GoogleAuth);
