import logo from './logo.svg';
import './App.css';
import {withAuthenticator} from '@aws-amplify/ui-react'

function App({signOut, user}) {
  return (
    <div className="App">
      {user.attributes.email} 
      <button onClick = {signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App, {
  socialProviders: ['apple']
})
