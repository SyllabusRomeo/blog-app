import React from 'react';

function SignIn () {

    return(
        <form>
            <h3>Sign In</h3>

            <label for="email">Email:</label><br/>
              <input type="email" id="email" className="email"/><br/>

            <label for="password">Password:</label><br/>
              <input type="password" id="password" className="password"/><br/>
        </form>
    )
}

export default SignIn;