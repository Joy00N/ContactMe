import React from 'react';
import {Input, Button} from 'antd';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',
            email:'',
            phone:''
        };

    }

    render() {
        const signUp =(
            <div>
                Username: <input type="text" title="Username"/>
                <br/>
                Password: <input type="password" title="Password"/>
                <br/>
                Email: <input type="text" title="Email"/>
                <br/>
                Phone: <input type="text" title="Phone"/>
                <br/>
                <button type="submit">Submit</button>
            </div>
        );

        return (
            <div>
                <h1>
                    Please sign up!
                </h1>
                <h2>Enter below information to create a ContactMe account!</h2>
                {signUp}
            </div>
        );
    }
}

export default SignUpForm;