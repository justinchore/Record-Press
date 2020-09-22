import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username_or_email: "",
            password: "",
        }
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
        <div>
            <h1>Bandcamp</h1>
            <h2>{this.props.formType}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Email address
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update(field)}>
                    </input>
                </label>
                <label>Password
                    <input
                        type="text"
                        value={this.state.password}
                        onChange={this.update(field)}>
                    </input>
                </label>
                <label>Username
                    <input
                        type="text"
                        value={this.state.username}>
                    </input>
                </label>
            </form>
        </div>
    }
}

export default Login