import React from 'react';
import {Input, Button} from 'antd';
import {Link, BrowserRouter as Router, Route} from "react-router-dom";
import SignInForm from "./SignInForm";
import axios from "axios";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',
            firstname:'',
            lastname:'',
            email:'',
            phone:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    handleChange(e) {
        // console.log("NAME: " + e.target.name + " VALUE: " + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        let newUser = {
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone
        };
        console.log(newUser);
        this.createUser(newUser);
    }

    handleSignIn(e) {
        e.preventDefault();
        this.props.showSignIn();
    }

    createUser(newUser) {
        console.log(newUser)
        axios.post('http://localhost:8080/user/users', newUser)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error.response);
            });

    }



    render() {
        const signUp =(
            <div>
                Username: <input type="text" name="username" onChange={this.handleChange}/>
                <br/>
                Password: <input type="text" name="password" onChange={this.handleChange}/>
                <br/>
                Firstname: <input type="text" name="firstname" onChange={this.handleChange}/>
                <br/>
                Lastname: <input type="text" name="lastname" onChange={this.handleChange}/>
                <br/>
                Email: <input type="text" name="email" onChange={this.handleChange}/>
                <br/>
                Phone: <input type="text" name="phone" onChange={this.handleChange}/>
                <br/>
                <button type="submit" onClick={this.handleClick}>Submit</button>
                <br/>
                <button type="submit" onClick={this.handleSignIn}>Sign In</button>
            </div>
        );

        return (
            <div>
                <h1>
                    Please sign up!
                </h1>
                <h2>Enter below information to create a ContactMe account</h2>
                {signUp}
                <br/>

            </div>
        );


    }
}

export default SignUpForm;