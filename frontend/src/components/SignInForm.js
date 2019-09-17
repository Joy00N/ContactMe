import React from 'react';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(e) {
        console.log(e.target.name,'&',e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.username)
    }

    handleClick(e) {
        console.log('submitted');
        console.log(this.state.username);
        e.preventDefault();
        let newUser = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.verifyLogin(newUser);
    }

    handleSignUp(e) {
        console.log('signUp');
        e.preventDefault();
        this.props.showSignUp();
    }

    render() {
        const signIn =(
            <div>
                Username: <input type="text" name="username" onChange={this.handleChange}/>
                <br/>
                Password: <input type="password" name="password" onChange={this.handleChange}/>
                <br/>
                <button type="primary" onClick={this.handleClick}>Submit</button>
                <br/>
                <button type="primary" onClick={this.handleSignUp}>Sign Up</button>
                <br/>
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