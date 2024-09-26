import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const SignupLogin = () => {
    const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div>
        {!loggedIn ? <SignUp setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn} />}

    </div>
  )
}

export default SignupLogin;