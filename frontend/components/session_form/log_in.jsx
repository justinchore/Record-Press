import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username_or_email: "",
            password: "",
        }

        this.update = this.update.bind(this); 
        this.renderErrors = this.renderErrors.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit() {
        this.props.processForm(this.state); 
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return(
        <div>
            <h1>Bandcamp</h1>
            <h2>{this.props.formType}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Username / email
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('username_or_email')}>
                    </input>
                </label>
                <br></br>
                <label>Password
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}>
                    </input>
                </label>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
            <p>Don't have an account? Sign up { this.props.navLink }</p>
        </div>
        )
    }
}

export default LoginForm; 