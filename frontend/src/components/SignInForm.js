import React from 'react';
import {Input, Button} from 'antd';
import {Link, Router} from "react-router-dom";

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: ''
        };

    }

    render() {
        const signIn =(
            <div>
                Username: <input type="text" title="Username"/>
                <br/>
                Password: <input type="password" title="Password"/>
                <br/>
                <button type="submit">Submit</button>
                <br/>

                <Link to ="/SignUpForm"><button>Sign Up</button></Link>

            </div>
        );

        return (
            <div>
                <h1>
                    Please sign in!
                </h1>
                {signIn}
            </div>
        );
    }
}

export default SignInForm;