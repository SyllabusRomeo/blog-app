import React from 'react';

function SignUp () {

    return(
        <form>
            <h3>Create Account</h3>

            <label for="fname">First name:</label><br/>
              <input type="text" id="fname" className="fname"/><br/>

            <label for="lname">Last name:</label><br/>
               <input type="text" id="lname" className="lname"/><br/>
            <label for="email">Email:</label>
               <input type="email" id="email" className="email"/><br/>

            <label for="password">Password:</label>
                <input type="password" id="cpassword" className="cpassword"/><br/>
                  
        </form>
    )
}

export default SignUp;