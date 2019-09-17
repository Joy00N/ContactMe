import React, {Component} from 'react';
import App from "./App";
import axios from "axios";
import {LocaleProvider} from "antd";
import enUS from 'antd/lib/locale-provider/en_US';
import SignInForm from "./components/SignInForm";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import autoBind from 'react-autobind';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            verified:false,
            signUpPage:false,
            users:[]
        };
        autoBind();
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

        return (
            <LocaleProvider locale={enUS}>
                <Router>
                        <div>
                            <Route exact path={"/"} component={App}/>
                            <Route path={"/signIn"} component={SignInForm}/>
                            <Route path={"/signUp"} component={SignUpForm}/>
                        </div>
                </Router>
            </LocaleProvider>

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