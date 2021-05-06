import React from 'react';

class GoogleAuth extends React.Component {
   state = { isSignedIn: null };
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
               this.setState({ isSignedIn: this.auth.isSignedIn.get() });
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
      });
   }

   onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
   };

   renderAuthButton() {
      if (this.state.isSIgnedIn === null) {
         return <div>i dont know if we are signed in</div>;
      } else if (this.state.isSignedIn) {
         return <div>you are signed in</div>;
      } else return <div>you might be sign in</div>;
   }
   render() {
      return <div>{this.renderAuthButton()}</div>;
   }
}

export default GoogleAuth;
