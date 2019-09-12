import React, {Component} from 'react';
import App from "./App";
import axios from "axios";
import {Col, Row} from "antd";
import SignInForm from "./components/SignInForm";
import Users from "./components/Users";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            verified:false,
            signUpPage:false,
            users:[]
        };
        this.verifyLogin = this.verifyLogin.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
        this.showSignIn = this.showSignIn.bind(this);
    }



    verifyLogin(user){
        if(user.username=='jihyun' && user.password=='1234') {
            console.log('login verified');
            this.setState({verified: true});
        }else
            this.setState({verified:false});
    }

    showSignUp(){
        this.setState({signUpPage:true});
    }

    showSignIn(){
        this.setState({signUpPage:false});
    }

    render() {

        const signIn = (
            <SignInForm verifyLogin = {this.verifyLogin} showSignUp = {this.showSignUp}/>
        )

        const signUp = (
            <SignUpForm showSignIn = {this.showSignIn}/>
        )

        const signInSignUp=(
            <div>
                {!this.state.signUpPage && signIn}
                {this.state.signUpPage && signUp}
            </div>
        )

        const mainPage = (
            <App/>
        )

        return (
            <div>
                {this.state.verified ? 'Signed In!':'Please Sign In'}
                {this.state.verified ? mainPage : signInSignUp}

                {/*<Users users={this.state.users}/>*/}
            </div>
        );
    }

    componentDidMount() {
        // axios.get('http://localhost:8080/contact/contacts')
        //     .then(res => {
        //         this.setState({contacts: res.data});
        //     });

        axios.get('http://localhost:8080/user/users')
            .then(res => {
                this.setState({users: res.data});
            });
    }

}

export default Home;