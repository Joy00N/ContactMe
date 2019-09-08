import React from 'react';
import {Input, Button} from 'antd';
import {Link, Router} from "react-router-dom";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',
            email:'',
            phone:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        console.log("NAME: " + e.target.name + " VALUE: " + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        let newUser = {username: this.state.username, password: this.state.password, email: this.state.email, phone: this.state.phone};
        console.log(newUser);
        this.props.createContact(newUser);
    }

    componentWillReceiveProps(props) {
        const { refresh, id } = this.props;
        if (props.refresh !== refresh) {
            this.fetchShoes(id)
                .then(this.refreshShoeList)
        }
    }

    render() {
        const signUp =(
            <div>
                Username: <input type="text" name="username" onChange={this.handleChange}/>
                <br/>
                Password: <input type="password" name="password" onChange={this.handleChange}/>
                <br/>
                Email: <input type="text" name="email" onChange={this.handleChange}/>
                <br/>
                Phone: <input type="text" name="phone" onChange={this.handleChange}/>
                <br/>
                <button type="submit" onClick={this.handleClick}>Submit</button>
                <br/>
                {/*<Router>*/}
                {/*    <Link to ="/"><button>Sign In</button></Link>*/}
                {/*</Router>*/}
            </div>
        );

        return (
            <div>
                <h1>
                    Please sign up!
                </h1>
                <h2>Enter below information to create a ContactMe account</h2>
                {signUp}
            </div>
        );


    }
}

export default SignUpForm;